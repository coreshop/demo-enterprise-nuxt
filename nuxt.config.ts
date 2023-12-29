// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/css/mail.css",
    "~/assets/css/owl.carousel.css",
    "~/assets/css/shop.css",
  ],
  ssr: false,
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
      title: "CoreShop Headless DEmo",
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
      script: [
        {
          src: "/js/vendor/jquery-1.11.1.min.js",
        },
        {
          src: "/js/vendor/owl.carousel.min.js",
        },
        {
          src: "/js/vendor/bootstrap.js",
        },
        {
          src: "/js/vendor/popper.js",
        },
      ]
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_URL ||'https://coreshop-headless.localhost/pimcore-graphql-webservices/test?apikey=cccffae4fb6834f6a3d7eef35e890777'
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
