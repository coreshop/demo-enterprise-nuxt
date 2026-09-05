import { joinURL } from 'ufo'
import { defineProvider } from '@nuxt/image/runtime'

/**
 * Serves Pimcore assets and thumbnails from the shop host (runtime config `baseUrl`).
 */
export default defineProvider({
  getImage: (src) => ({
    url: joinURL(useRuntimeConfig().public.baseUrl, src),
  }),
})
