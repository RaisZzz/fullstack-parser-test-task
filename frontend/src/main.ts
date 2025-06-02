import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import '@/assets/sass/main.sass'

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)

app.mount('#app')
