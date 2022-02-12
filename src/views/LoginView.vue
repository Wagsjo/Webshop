<script>
  import { auth } from "firebaseui"
  import "firebaseui/dist/firebaseui.css"
  import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth"

  export default {
    components: {},
    mounted() {
      const ui = new auth.AuthUI(getAuth())
      ui.start("#firebaseui-auth-container", {
        signInOptions: [
          EmailAuthProvider.PROVIDER_ID,
          GoogleAuthProvider.PROVIDER_ID
        ],
        signInFlow: "popup",
        signInSuccessUrl: "/minasidor"
      })
    }
  }
</script>

<template>
  <div class="container">
    <div class="row vh-100">
      <div id="firebaseui-auth-container" />
    </div>
  </div>
</template>
