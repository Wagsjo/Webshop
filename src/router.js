import { createRouter, createWebHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import HomeView from "./views/HomeView.vue"
import RegistrationView from "./views/RegistrationView.vue"
import LoginView from "./views/LoginView.vue"
import MyPagesView from "./views/MyPagesView.vue"
import EditMyPagesView from "./views/EditMyPagesView.vue"
import AdoptionsView from "./views/AdoptionsView.vue"
import DogsView from "./views/DogsView.vue"
import CatsView from "./views/CatsView.vue"
import BirdView from "./views/BirdView.vue"
import AnimalDetailsView from "./views/AnimalDetailsView.vue"
import CartView from "./views/CartView.vue"
import AddingAnimals from "./components/AddingAnimals.vue"
import SearchBar from "./components/SearchBar.vue"

export default createRouter({
  history: createWebHistory(),
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
      component: RegistrationView,
      path: "/registering"
    },
    {
      component: LoginView,
      path: "/login"
    },
    {
      component: MyPagesView,
      path: "/minasidor"
    },
    {
      component: EditMyPagesView,
      path: "/RedigeraMinasidor"
    },
    {
      component: AdoptionsView,
      path: "/adoptions"
    },
    {
      component: DogsView,
      path: "/dogs",
      name: "dogsMain"
    },
    {
      component: AnimalDetailsView,
      path: "/animals/:id"
    },
    {
      component: CatsView,
      path: "/cats"
    },
    {
      component: BirdView,
      path: "/bird"
    },
    { component: CartView, path: "/cart" },
    { component: AddingAnimals, path: "/adding" },
    {
      component: SearchBar,
      path: "/searchbar"
    }
  ]
})
