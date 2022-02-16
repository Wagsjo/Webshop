<script>
  export default {
    methods: {
      handleMessage() {
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          email: this.email,
          message: this.message
        }
        this.ourmessage =
          "<p>Tack " + this.firstName + "! Ditt meddelande har skickats.!</p>"
        console.log(data)
      }
    },
    data() {
      return {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: this.phoneNumber,
        message: null,
        ourmessage: null
      }
    }
  }
</script>

<template>
  <h1>Kontakta oss på raining cats and dogs and Bird</h1>
  <form id="contactForm" @submit.prevent="handleMessage">
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
      <label for="Email">Phone</label>
      <input type="number" class="form-control" v-model="phoneNumber" />
    </div>

    <div class="form-group">
      <label for="message" />
      <textarea
        type="text"
        class="form-control"
        v-model="message"
        placeholder="Skriv in ditt meddelande här"
      />
    </div>

    <button type="submit" class="btn btn-primary">
      Skicka ditt meddelande
    </button>
    <div v-html="ourmessage" />
  </form>
</template>
<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
  #contactForm {
    background-color: #c4c4c4;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 2em;
    .btn-primary {
      margin-top: 2em;
      color: black;
      background-color: #babfda;
    }

    textarea {
      min-height: 150px;
    }
  }

  @media (max-width: 700px) {
    #contactForm {
      max-width: 300px;
    }
  }
</style>
