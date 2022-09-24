import { NuxtApp } from '#app'
import {
  Quasar, 
  Notify,
} from 'quasar'
import 'quasar/dist/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    plugins: {
      Notify,
    }
  })
})