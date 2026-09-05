// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: true },
  ssr: true,

  // The templates predate strict null checks; keep typecheck useful without rewriting them.
  typescript: {
    strict: false,
  },

  css: [
    '~/assets/css/mail.css',
    '~/assets/css/owl.carousel.css',
    '~/assets/css/shop.css',
  ],

  modules: ['@pinia/nuxt', '@nuxt/image'],

  // Both values are read at runtime (NUXT_PUBLIC_API_URL / NUXT_PUBLIC_BASE_URL),
  // the Docker image is therefore the same for every environment.
  runtimeConfig: {
    public: {
      // GraphQL endpoint of the CoreShop headless bundle including the DataHub api key
      apiUrl: 'https://enterprise.coreshop.dev/pimcore-graphql-webservices/coreshop?apikey=',
      // Base URL of the shop, used for asset and thumbnail URLs
      baseUrl: 'https://enterprise.coreshop.dev',
    },
  },

  image: {
    providers: {
      pimcore: {
        name: 'pimcore',
        provider: '~/providers/pimcore.ts',
      },
    },
  },

  app: {
    head: {
      title: 'CoreShop Headless Demo',
      script: [
        { src: '/js/vendor/jquery-1.11.1.min.js' },
        { src: '/js/vendor/owl.carousel.min.js' },
        { src: '/js/vendor/popper.js' },
        { src: '/js/vendor/bootstrap.js' },
      ],
    },
  },
})
