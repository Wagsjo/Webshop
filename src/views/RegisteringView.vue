<script>
  import RegisteringForm from "../components/RegisteringForm.vue"

  export default {
    components: {
      RegisteringForm
    }
  }
</script>

<template>
  <main>
    <RegisteringForm />

    <p>Har du redan ett konto <RouterLink to="/login">logga in</RouterLink></p>
    <p><RouterLink to="/minasidor">Mina sidor</RouterLink></p>
  </main>
</template>
