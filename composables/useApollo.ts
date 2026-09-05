import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

export const TOKEN_STORAGE_KEY = 'coreShopAuthToken'

/**
 * Creates the Apollo client for the CoreShop headless GraphQL endpoint. The endpoint comes from
 * the runtime config, the JWT of a logged-in customer from localStorage (client side only).
 */
export function createCoreShopApolloClient(apiUrl: string, onUnauthorized: () => void) {
  const authLink = setContext((_, { headers }) => {
    const token = import.meta.client ? localStorage.getItem(TOKEN_STORAGE_KEY) : null

    return token ? { headers: { ...headers, Authorization: `Bearer ${token}` } } : { headers }
  })

  const errorLink = onError(({ networkError }) => {
    const result = (networkError as { result?: { code?: number; message?: string } } | null)?.result

    if (result?.code === 401 && result?.message === 'Expired JWT Token') {
      onUnauthorized()
    }
  })

  return new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, new HttpLink({ uri: apiUrl })]),
    cache: new InMemoryCache(),
    ssrMode: import.meta.server,
  })
}

/**
 * Login/logout helpers around the token storage, same surface the previous @nuxtjs/apollo
 * composable offered to the stores.
 */
export function useApollo() {
  const { $apolloClient } = useNuxtApp()

  const getToken = (): string | null => (import.meta.client ? localStorage.getItem(TOKEN_STORAGE_KEY) : null)

  const onLogin = async (token: string) => {
    if (import.meta.client) {
      localStorage.setItem(TOKEN_STORAGE_KEY, token)
    }
    await $apolloClient.resetStore()
  }

  const onLogout = async () => {
    if (import.meta.client) {
      localStorage.removeItem(TOKEN_STORAGE_KEY)
    }
    await $apolloClient.clearStore()
  }

  return { getToken, onLogin, onLogout }
}
