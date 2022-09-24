export default defineNuxtConfig({
  srcDir: './src',
  ssr: false,
  modules: [
    ['@pinia/nuxt', {disableVuex: true}]
  ]
})
