<script>
  import firebase from "../firebase"
  export default {
    name: "AddingContact",
    data() {
      return {
        contact: {
          firstName: null,
          lastName: null,
          email: null,
          phoneNumber: "",
          message: null
        },
        loading: false,
        error: false
      }
    },
    computed: {
      isValid() {
        return this.validateForm(this.contact)
      }
    },
    methods: {
      validateForm(data) {
        return data.email
      },
      addContact: function () {
        this.loading = true
        this.error = false

        firebase
          .addContact(this.contact)
          .then((docRef) => {
            console.log("addContact:", docRef.id, docRef.data())
            this.$router.push(`/contact/${docRef.id}`)
          })
          .catch((err) => {
            console.error(err)
            this.error = true
          })
          .finally(() => {
            this.loading = false
          })
      }
    }
  }
</script>

<template>
  <h1>Kontakta oss på raining cats and dogs and Bird</h1>
  <form id="contactForm">
    <div class="form-group">
      <label for="FirstName">Förnamn</label>
      <input
        class="form-control"
        type="text"
        id="FirstName"
        required
        v-model.lazy="contact.firstName"
        :disabled="loading"
      />
      <span />
    </div>

    <div class="form-group">
      <label for="LastName">Efternamn</label>
      <input
        class="form-control"
        type="text"
        id="LastName"
        required
        v-model.lazy="contact.lastName"
        :disabled="loading"
      />
      <span />
    </div>

    <div class="form-group">
      <label for="Email">Epost</label>
      <input
        class="form-control"
        type="email"
        id="Email"
        placeholder="user@example.com"
        required
        v-model.lazy="contact.email"
        :disabled="loading"
      />
      <span />
    </div>

    <div class="form-group">
      <label for="Phone">Telefon</label>
      <input
        class="form-control"
        type="tel"
        id="Phone"
        required
        v-model.lazy="contact.phoneNumber"
        :disabled="loading"
      />
      <span />
    </div>

    <div class="form-group">
      <label for="message" />
      <textarea
        class="form-control"
        type="text"
        id="message"
        required
        v-model.lazy="contact.message"
        :disabled="loading"
        placeholder="Skriv in ditt meddelande här"
      />
      <span />
    </div>

    <button
      v-if="!loading"
      class="btn btn-primary"
      :disabled="loading"
      @click="addContact"
    >
      Skicka ditt meddelande
    </button>
  </form>
</template>
<style lang="scss" scoped>
  input + span {
    position: relative;
  }

  input + span::before {
    position: absolute;
    right: -360px;
    top: -45px;
  }

  input:invalid {
    border: 2px solid red;
  }

  input:invalid + span::before {
    content: "✖";
    color: red;
  }

  input:valid + span::before {
    content: "✓";
    color: green;
  }
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
