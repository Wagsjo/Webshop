<script>
  import loginForm from "../components/loginForm.vue"

  export default {
    components: {
      loginForm
    }
  }
</script>

<template>
  <main>
    <loginForm />
    <p><RouterLink to="/registering">Skapa ett konto hos oss</RouterLink></p>
  </main>
</template>
