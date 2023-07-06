// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/scss/bootstrap.scss",
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    '@nuxtjs/apollo',
  ],

  app: {
    head: {
      title: "Outstock - Clean, Minimal eCommerce Vue Nuxt 3 Template",
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
        },
      ]
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_URL ||'https://coreshop-datahub.localhost/pimcore-graphql-webservices/test?apikey=cccffae4fb6834f6a3d7eef35e890777'
      }
    },
  },

  devtools: {
    enabled: true,
  },

  build: {
    transpile: ["tslib"], //https://github.com/nuxt/nuxt/discussions/21533
  }
})
