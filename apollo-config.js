import {onError} from 'apollo-link-error'
import {setContext} from 'apollo-link-context'
import {from} from 'apollo-link'
import {createUploadLink} from 'apollo-upload-client'

export default (context) => {
    let link
    const baseUrl = process.env.API_URL || 'https://demo4-enterprise.coreshop.org/pimcore-graphql-webservices/coreshop?apikey=cccffae4fb6834f6a3d7eef35e890777'
debugger;
    const logOut = async function () {
        await context.$auth.logout()
        await context.$apolloHelpers.onLogout()
        if (process.server) context.redirect('/')
    }

    const errorLink = onError(
        async ({graphQLErrors, networkError, operation, forward}) => {
            const target = 'JWTExpired'
            if (
                (networkError && networkError.message.includes(target)) ||
                (graphQLErrors && graphQLErrors[0].message.includes(target))
            )
                await logOut()

            return forward(operation)
        }
    )

    const httpLink = createUploadLink({
        uri: `https://${baseUrl}`
    })
    link = from([errorLink, httpLink])

    const authLink = setContext(async (_, {headers}) => {
        const Authorization = await context.$auth.getToken('auth0')
        const authorizationHeader = Authorization ? {Authorization} : {}
        return {
            headers: {
                ...headers,
                ...authorizationHeader
            }
        }
    })
    link = authLink.concat(link)

    return {
        defaultHttpLink: false,
        link
    }
}