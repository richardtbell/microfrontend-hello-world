import { createApp } from 'vue'
import App from './App'

const mount = (el) => {
    const app = createApp(App)
    app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#hello-vue-dev-app')
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }