import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import i18n from './locales/i18n'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
