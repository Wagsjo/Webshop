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
import AddingAnimals from "./views/AddingAnimalsView.vue"
import RemovingAnimals from "./views/RemovingAnimalsView.vue"
import AdminPageView from "./views/AdminPageView.vue"
import AdminMesseges from "./views/AdminMessegesView.vue"
import AdminApplications from "./views/AdminApplicationsView.vue"

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

    {
      component: AdminPageView,
      path: "/admin",
      children: [
        {
          path: "/removing",
          component: RemovingAnimals
        },
        {
          path: "/adding",
          component: AddingAnimals
        },
        {
          path: "/messages",
          component: AdminMesseges
        },
        {
          path: "/applications",
          component: AdminApplications
        }
      ]
    }
  ]
})
