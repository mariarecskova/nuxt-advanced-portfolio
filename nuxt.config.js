export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  head: {
    title: "Maria Recskova",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/logo_mr.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          "Exo+2": {
            ital: [700],
          },
          "Space+Mono": true,
        },
      },
    ],
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-lazy-load"],

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    transpile: ["three"],
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  generate: {
    subFolders: false,
  },
  ssr: false,
};
