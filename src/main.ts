import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

const deferRender = async () => {
    const { worker } = await import('./mocks/browser')

    return worker.start({
        onUnhandledRequest: 'bypass',
        quiet: true,
    })
}

deferRender().then(() => {
    app.mount('#app')
})
