import '@/assets/css/styles.css'

import { createApp } from 'vue'
import { enableMocking } from '@/mocks/enableMocking'
import { router } from '@/router'
import { store } from '@/store'
import { i18n } from '@/i18n'
import App from '@/components/App.vue'

enableMocking().then(() => {
  const app = createApp(App)

  app.use(store)
  app.use(router)
  app.use(i18n)

  app.mount('#app')
})
