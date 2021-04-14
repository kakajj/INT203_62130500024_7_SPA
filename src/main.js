import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import TheNavigation from './components/TheNavigation.vue'

const app = createApp(App)
app.component('TheNavigation',TheNavigation)
app.use(router).mount('#app')
