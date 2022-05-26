import { createApp } from 'vue';
import App from './App.vue';
import store from './store.js';
import mitt from 'mitt';
import './registerServiceWorker'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(store).mount('#app');
