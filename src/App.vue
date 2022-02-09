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

  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>
