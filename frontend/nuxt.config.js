export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'its.agency',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  styleResources: {
    sass: ["~assets/styles/_utils.sass"]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "~assets/styles/index.sass", lang: "sass" },
    "loco-scroll/dist/locomotive-scroll.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/locoscroll",
      mode: "client"
    },
    {
      src: "~/plugins/metrics",
      mode: "client"
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/ui', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    'nuxt-i18n',
    '@nuxtjs/apollo'
  ],

  env: {
    strapiBaseUri: "https://its-global-strapi.herokuapp.com/"
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://its-global-strapi.herokuapp.com/graphql",
      }
    }
  },
  // env: {
  //   strapiBaseUri: "https://its-global-strapi.herokuapp.com/" || "http://localhost:1337"
  // },

  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: "https://its-global-strapi.herokuapp.com/graphql" || "http://localhost:1337/graphql",
  //     }
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
