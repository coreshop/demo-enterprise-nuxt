// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/mail.css",
    "~/assets/css/owl.carousel.css",
    "~/assets/css/shop.css",
  ],
  ssr: true,
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
    '@nuxt/image',
  ],
  image: {
    providers: {
      pimcore: {
        name: 'pimcore',
        provider: '~/providers/pimcore.ts',
        options: {
          baseURL: process.env.BASE_URL || 'https://demo4-enterprise.coreshop.org/',
        }
      }
    },
  },

  app: {
    head: {
      title: "CoreShop Headless Demo",
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
      script: [
        {
          src: "/js/vendor/jquery-1.11.1.min.js",
        },
        {
          src: "/js/vendor/owl.carousel.min.js",
        },
        {
          src: "/js/vendor/popper.js",
        },
        {
          src: "/js/vendor/bootstrap.js",
        },
      ]
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_URL || 'https://demo4-enterprise.coreshop.org/pimcore-graphql-webservices/coreshop?apikey=cccffae4fb6834f6a3d7eef35e890777',
        
      }
    },
  }
})
