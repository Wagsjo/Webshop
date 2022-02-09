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
  <div class="container-fluid p-0 d-flex flex-column min-vh-100">
    <nav>
      <NavBar />
    </nav>

    <main class="flex-grow-1">
      <RouterView />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
