<script>
  import NavBar from "./components/NavBar.vue"
  import Footer from "./components/PageFooter.vue"

  export default {
    components: {
      NavBar,
      Footer
    }
  }
</script>

<template>
  <DogsViewVue />
  <nav>
    <NavBar />
  </nav>
  <div class="container-fluid p-0 d-flex flex-column min-vh-100">
    <nav v-if="$route.path != '/login'">
      <NavBar />
    </nav>

    <main class="flex-grow-1">
      <RouterView />
    </main>

    <footer v-if="$route.path != '/login'">
      //footer och navbar syns inte på /login
      <Footer />
    </footer>
  </div>
</template>
