import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

const app = createApp(App);

app.use(PrimeVue).use(router).mount('#app');