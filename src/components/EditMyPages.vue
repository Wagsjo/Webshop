<script>
  import {
    getAuth,
    updateProfile,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updateEmail,
    updatePassword
  } from "firebase/auth"

  const auth = getAuth()

  export default {
    data() {
      return {
        user: null,
        nameChange: null,
        newEmail: null,
        email: null,
        currentPassword: null,
        newPassword: null
      }
    },
    methods: {
      submit: function ($event) {
        let noNameError = document.getElementById("noNameError")
        let newNameInput = document.getElementById("newNameInput")
        $event.preventDefault()
        if (this.nameChange != null) {
          newNameInput.style.borderColor = "green"
          noNameError.style.display = "none"
          updateProfile(auth.currentUser, {
            displayName: this.nameChange ?? auth.currentUser?.displayName
          }).catch((error) => {
            console.log("ERROR :" + error)
          })
        } else {
          newNameInput.style.borderColor = "red"
          noNameError.style.display = "inline"
          console.log("ERROR: You need to write down a new name")
        }
      },
      reauthenticate(currentPassword) {
        const user = auth.currentUser
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        )
        return reauthenticateWithCredential(user, credential)
      },
      changeEmail($event) {
        let wrongPasswordError = document.getElementById("wrongPasswordError")
        let currentPasswordInput = document.getElementById(
          "currentPasswordInput"
        )
        let noChangesError = document.getElementById("noChangesError")
        let newEmailInput = document.getElementById("newEmailInput")
        let newPasswordInput = document.getElementById("newPasswordInput")
        $event.preventDefault()
        this.reauthenticate(this.currentPassword)
          .then(() => {
            console.log("User is re-authenticated!")
            wrongPasswordError.style.display = "none"
            currentPasswordInput.style.borderColor = "green"
            if (this.newEmail != null && this.newEmail != "") {
              updateEmail(auth.currentUser, this.newEmail)
                .then(() => {
                  console.log("Email address is updated!")
                  newEmailInput.style.borderColor = "green"
                  newPasswordInput.style.borderColor = "red"
                  noChangesError.style.display = "none"
                })
                .catch((error) => {
                  console.log("ERROR :" + error)
                  let newEmailInput = document.getElementById("newEmailInput")
                  let invalidEmailError =
                    document.getElementById("invalidEmailError")
                  newEmailInput.style.borderColor = "red"
                  invalidEmailError.style.display = "inline"
                })
            }
            if (this.newPassword != null && this.newPassword.length > 0) {
              updatePassword(auth.currentUser, this.newPassword)
                .then(() => {
                  console.log("Password is updated!")
                  newEmailInput.style.borderColor = "red"
                  newPasswordInput.style.borderColor = "green"
                  noChangesError.style.display = "none"
                })
                .catch((error) => {
                  console.log("ERROR :" + error)
                  let invalidPasswordError = document.getElementById(
                    "invalidPasswordError"
                  )
                  let newPasswordInput =
                    document.getElementById("newPasswordInput")
                  invalidPasswordError.style.display = "inline"
                  newPasswordInput.style.borderColor = "red"
                })
            }

            if (this.newPassword == null && this.newEmail == null) {
              newEmailInput.style.borderColor = "red"
              newPasswordInput.style.borderColor = "red"
              noChangesError.style.display = "inline"
            }
          })
          .catch((error) => {
            console.log("ERROR :" + error)
            currentPasswordInput.style.borderColor = "red"
            wrongPasswordError.style.display = "inline"
          })
      },
      created() {
        getAuth().onAuthStateChanged((user) => {
          this.user = user
          console.log(user)
        })
      }
    }
  }
</script>

<template>
  <main>
    <form id="redigeraForm">
      <h1>Redigera ditt konto</h1>
      <div class="form-group">
        <label for="FirstName">Namn</label>
        <input
          type="text"
          class="form-control"
          v-model="nameChange"
          id="newNameInput"
        />
      </div>

      <span id="noNameError" class="errorMessage" style="display: none"
        ><i class="bi bi-exclamation-diamond-fill" /> Du har inte angett ett
        nytt namn</span
      >

      <button @click="submit" type="submit" class="btn btn-primary">
        Ändra namn
      </button>

      <div class="form-group">
        <label for="email">Ny e-postadress</label>
        <input
          type="text"
          class="form-control"
          v-model="newEmail"
          id="newEmailInput"
        />
      </div>

      <div id="invalidEmailError" class="errorMessage" style="display: none">
        <i class="bi bi-exclamation-diamond-fill" />
        Ogiltig e-postadress
      </div>

      <div class="form-group">
        <label for="newPassword">Nytt lösenord</label>
        <input
          type="password"
          class="form-control"
          v-model="newPassword"
          id="newPasswordInput"
        />
      </div>

      <div id="invalidPasswordError" class="errorMessage" style="display: none">
        <i class="bi bi-exclamation-diamond-fill" />
        Ogiltig lösenord
      </div>

      <div id="noChangesError" class="errorMessage" style="display: none">
        <i class="bi bi-exclamation-diamond-fill" />
        Du har inte skrivit några nya ändringar
      </div>

      <div class="form-group">
        <label for="currentPass">Nuvarande Lösenord</label>
        <input
          type="password"
          class="form-control"
          v-model="currentPassword"
          id="currentPasswordInput"
        />
      </div>

      <span id="wrongPasswordError" class="errorMessage" style="display: none">
        <i class="bi bi-exclamation-diamond-fill" />
        Obligatorisk</span
      >

      <button @click="changeEmail" type="submit" class="btn btn-primary">
        Ändra e-postadress / lösenord
      </button>
    </form>
  </main>
</template>

<style scoped>
  main {
    background-color: rgba(196, 196, 196, 0.43);
    margin: 1% 30%;
    height: 100%;
    border-radius: 10px;
  }
  .errorMessage {
    color: red;
    white-space: nowrap;
  }
  main button {
    margin-left: 1em;
  }
  .form-group {
    margin-top: 1em;
  }
  #redigeraForm {
    padding-top: 3em;
    padding-bottom: 3em;
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
