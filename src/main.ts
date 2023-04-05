import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const start = () => {
    document.title = "Game Of Life - WASM"
    const app = createApp(App)
    app.mount('#app')
}


start()