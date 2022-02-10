<script>
  export default {
    methods: {
      handlesubmit() {
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        }
        console.log("Du är inloggad")
        console.log(data)
      }
    },
    data() {
      return {
        firstName: null,
        lastName: null,
        email: null,
        password: null
      }
    }
  }
</script>

<template>
  <form id="RegForm" @submit.prevent="handlesubmit">
    <h1>Skapa ett konto</h1>
    <div class="form-group">
      <label for="FirstName">Förnamn</label>
      <input type="text" class="form-control" v-model="firstName" />
    </div>

    <div class="form-group">
      <label for="LastName">Efternamn</label>
      <input type="text" class="form-control" v-model="lastName" />
    </div>

    <div class="form-group">
      <label for="Email">Epost</label>
      <input type="text" class="form-control" v-model="email" />
    </div>

    <div class="form-group">
      <label for="Password">Lösenord</label>
      <input type="text" class="form-control" v-model="password" />
    </div>

    <button type="submit" class="btn btn-primary">Skapa profil</button>
    <br />
    <p>
      Har du redan ett konto
      <RouterLink to="/login">logga in</RouterLink>
    </p>
  </form>
</template>

<style>
  #RegForm {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 5em;
    padding-bottom: 5em;
  }

  .btn-primary {
    margin-top: 2em;
    color: black;
    background-color: #babfda;
  }

  .form-group input {
    background-color: #c4c4c4;
  }

  @media (max-width: 700px) {
  }
</style>
