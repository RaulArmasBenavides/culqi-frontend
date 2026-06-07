import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import router from './router/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, {
  position: 'top-right',
  timeout: 3000,
  closeButton: false,
})

app.mount('#app')
