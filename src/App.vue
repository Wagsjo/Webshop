<script>
  import NavBar from "./components/NavBar.vue"
  import CounterButton from "./components/CounterButton.vue"
  import HelloWorld from "./components/HelloWorld.vue"
  import Footer from "./components/PageFooter.vue"
  import DogsViewVue from "./views/DogsView.vue"

  export default {
    components: {
      CounterButton,
      HelloWorld,
      NavBar,
      DogsViewVue,
      Footer
    }
  }
</script>

<template>
  <DogsViewVue />
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
  <HelloWorld />
  <CounterButton />
</template>
