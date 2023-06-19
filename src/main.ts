import 'reflect-metadata'
import './ui/assets/styles/main.sass'
import { createApp } from 'vue'
import App from './ui/app/App.vue'
import router from './ui/router'
import { MoviesContainer } from './moviesContainer'

const diContainer = new MoviesContainer()

createApp(App).use(router).use(diContainer).mount('#app')
