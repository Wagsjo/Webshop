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
  <nav>
    <NavBar />
  </nav>
  <div class="container-fluid p-0 d-flex flex-column min-vh-100">
    <main class="flex-grow-1">
      <RouterView />
    </main>

    <footer v-if="$route.path != '/login'">
      <Footer />
    </footer>
  </div>
</template>
