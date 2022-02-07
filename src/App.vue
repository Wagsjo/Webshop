<script>
  import NavBar from "./components/NavBar.vue"
  import CitiesList from "./components/CitiesList.vue"
  import CounterButton from "./components/CounterButton.vue"
  import HelloWorld from "./components/HelloWorld.vue"
  import Footer from "./components/PageFooter.vue"

  export default {
    components: {
      CitiesList,
      CounterButton,
      HelloWorld,
      NavBar,
      Footer
    }
  }
</script>

<template>
  <nav>
    <NavBar />
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>
      <li>
        <RouterLink to="/login">logga in</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>
