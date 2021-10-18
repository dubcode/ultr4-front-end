// import axios from 'axios'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'periodic-table',
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
  webfontloader: {
    google: {
      families: ['Montserrat:400,500,600,800']
    }
  },
  // set API base URL
  env: {
    baseUrl: 'http://localhost:3000/periodic-table-api.json',
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },
  /*
  ** Generate Dynamic Routes
  No need for embed param but does need per_page=100
  generate: {
    routes () {
      return axios.get('http://localhost:1337/posts')
        .then((res) => {
          return res.data.map((post) => {
            return '/blog/' + post.id + '/' + post.slug
          })
        })
    }
  },
  */
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],

  apollo: {
    clientConfigs: {
      default: {
        // httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
