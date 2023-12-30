import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (
    src,
    { modifiers = {}, baseURL } = {}
) => {

    if (!baseURL) {
        // also support runtime config
        baseURL = useRuntimeConfig().public.siteUrl
    }

    return {
        url: joinURL(baseURL, src),
    }
}