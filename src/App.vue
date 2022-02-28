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
        return this.$route.path != "/bird" && this.$route.path != "/login"
      }
    }
  }
</script>

<template>
  <nav>
    <NavBar />
  </nav>
  <RouterView />
  <footer v-if="condition">
    <Footer />
  </footer>
</template>
