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
  <RouterView />

  <footer v-if="$route.path != '/bird'">
    <Footer />
  </footer>
</template>
