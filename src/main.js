import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"
import store from "./store"
import "bootstrap"

createApp(App).use(router).use(store).mount("#app")
