import 'reflect-metadata'
import './ui/assets/styles/main.css'
import { createApp } from 'vue'
import App from './ui/app/App.vue'
import router from './ui/router'

createApp(App).use(router).mount('#app')
