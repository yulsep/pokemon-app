import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

//we add use router --> use(router) to indicate next view
createApp(App).use(router).mount('#app')


