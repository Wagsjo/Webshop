import { createRouter, createWebHashHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import HomeView from "./views/HomeView.vue"
import RegisteringView from "./views/RegisteringView.vue"
import LoginView from "./views/LoginView.vue"
import MinasidorView from "./views/MinasidorView.vue"
import RedigeraMinasidor from "./views/RedigeraMinasidorView.vue"
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: "/about"
    },
    {
      component: ContactView,
      path: "/contact"
    },
    {
      component: HomeView,
      path: "/"
    },
    {
      component: RegisteringView,
      path: "/registering"
    },
    {
      component: LoginView,
      path: "/login"
    },
    {
      component: MinasidorView,
      path: "/minasidor"
    },
    {
      component: RedigeraMinasidor,
      path: "/redigeraMinasidor"
    }
  ]
})
