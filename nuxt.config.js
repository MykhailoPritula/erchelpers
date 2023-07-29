export default {
  ssr: false,
  head: {
    title: 'ERC. Specialists',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0',
      },
      {
        name: 'facebook-domain-verification',
        content: '1vbyxt3qyi7ah2y773dez6g7dzutui'
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://www.googletagmanager.com/gtag/js?id=G-JPN8CF9YDY', async: true },
      {src: 'https://www.googletagmanager.com/gtag/js?id=AW-10841851493', async: true},
      {src: 'https://www.googletagmanager.com/gtag/js?id=AW-10904855630', async: true},
      {src: '/js/gtag.js'},
      {src: '/js/fb.js'},
      {src: '/js/snapchat.js'},
      {src: '/js/tiktok.js'}
    ]
  },
  css: [
    '~/assets/scss/reset.scss'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-sweetalert2',
    '@nuxtjs/dotenv'
  ],
  router: {
    base: '/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },
  generate: {
    dir: './dist_server'
  },
  build: {
    target: 'server'
  },
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  serverMiddleware: [
    '~/api/index.js'
  ]
}
