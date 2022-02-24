<script>
  import RegistrationForm from "../components/RegistrationForm.vue"

  export default {
    components: {
      RegistrationForm
    }
  }
</script>

<template>
  <main>
    <RegistrationForm />

    <!-- <p>Har du redan ett konto <RouterLink to="/login">logga in</RouterLink></p> -->
    <button>
      <RouterLink to="/minasidor">Mina sidor</RouterLink>
    </button>
  </main>
</template>
