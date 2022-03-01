<script>
  import NavBar from "./components/NavBar.vue"
  import Footer from "./components/PageFooter.vue"

  export default {
    components: {
      NavBar,
      Footer
    },
    computed: {
      condition() {
        return this.$route.path != "/bird" || this.$route.path != "/bird"
      }
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
    <footer v-if="condition">
      <Footer />
    </footer>
  </div>
</template>
