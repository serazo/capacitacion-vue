import { createApp } from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'

// Bootstrap framework
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')
