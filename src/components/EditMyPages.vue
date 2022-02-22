<script>
  import {
    getAuth,
    updateProfile,
    sendPasswordResetEmail,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updateEmail
  } from "firebase/auth"

  const auth = getAuth()

  export default {
    data() {
      return {
        user: null,
        nameChange: null,
        newEmail: null,
        currentPassword: null,
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
      },
      reauthenticate(currentPassword) {
        const user = auth.currentUser
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        )
        return reauthenticateWithCredential(user, credential)
      },

      changeEmail() {
        this.reauthenticate(this.credential)
          .then(() => {
            alert("success")
            console.log("success")
            updateEmail(auth.currentUser, "ddn@partnerct.com")
              .then(() => {
                alert("email updated")
              })
              .catch((error) => {
                console.log(error.message)
              })
          })
          .catch((error) => {
            console.log(error.message)
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

      <div class="form-group">
        <label for="currentPass">Nuvarande Lösenord</label>
        <input type="password" class="form-control" v-model="currentPassword" />
      </div>

      <button @click="changeEmail" type="submit" class="btn btn-primary">
        Ändra E-postadress
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
