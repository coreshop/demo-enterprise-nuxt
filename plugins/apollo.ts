import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'
import { createCoreShopApolloClient, TOKEN_STORAGE_KEY } from '~/composables/useApollo'

export default defineNuxtPlugin((nuxtApp) => {
  const { apiUrl } = useRuntimeConfig().public

  const client = createCoreShopApolloClient(apiUrl, () => {
    if (import.meta.client) {
      localStorage.removeItem(TOKEN_STORAGE_KEY)
    }
    useAuthStore().token = null
  })

  nuxtApp.vueApp.provide(DefaultApolloClient, client)
  provideApolloClient(client)

  return {
    provide: {
      apolloClient: client,
    },
  }
})
