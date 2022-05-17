// ! IMPORTANT - for fontawesome package a prerelease version was used 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// cus1 fontawesome config
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import './index.css'

// cus1 fontawesome
library.add(fas);

const app = createApp(App)
.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
