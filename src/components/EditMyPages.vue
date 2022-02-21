<script>
  import { getAuth, updateProfile, sendPasswordResetEmail } from "firebase/auth"
  const auth = getAuth()

  export default {
    data() {
      return {
        user: null,
        nameChange: null,
        newEmail: null,
        password: null,
        email: null
      }
    },
    methods: {
      // Change Name
      submit: function () {
        updateProfile(auth.currentUser, {
          displayName: this.nameChange ?? auth.currentUser?.displayName
        }).catch((error) => {
          alert(error)
        })
      },

      // Reset Password
      resetPassword: function () {
        let mailSent = document.getElementById("mailSent")
        mailSent.style.display = "inline"
        sendPasswordResetEmail(auth, auth.currentUser?.email)
          .then(() => {
            alert("Email Sent!")
          })
          .catch((error) => {
            alert(error)
          })
      }
    },
    created() {
      getAuth().onAuthStateChanged((user) => {
        this.user = user
        console.log(user)
      })
    }
  }
</script>

<template>
  <main>
    <form id="RedigeraForm">
      <h1>Redigera ditt konto</h1>
      <div class="form-group">
        <label for="FirstName">Namn</label>
        <input type="text" class="form-control" v-model="nameChange" />
      </div>

      <div class="form-group">
        <label for="Email">E-post</label>
        <input type="text" class="form-control" v-model="newEmail" />
      </div>

      <button @click="submit" type="submit" class="btn btn-primary">
        Ändra
      </button>

      <button @click="resetPassword" type="submit" class="btn btn-primary">
        Återställ lösenord
      </button>

      <span id="mailSent" style="display: none"
        ><p>Email var skickad till din e-post!</p></span
      >
    </form>
  </main>
</template>

<style scoped>
  #mailSent {
    color: blue;
    margin-top: 1em;
  }
  main button {
    margin-left: 1em;
  }
  .form-group {
    margin-top: 1em;
  }
  #RedigeraForm {
    padding-top: 5em;
    padding-bottom: 5em;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-primary {
    margin-top: 2em;
    color: black;
    background-color: #babfda;
  }

  @media (max-width: 700px) {
  }
</style>
