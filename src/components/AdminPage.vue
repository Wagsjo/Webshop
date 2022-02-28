<script>
  import AdminLoginForm from "./AdminLoginForm.vue"

  export default {
    components: {
      AdminLoginForm
    },
    data() {
      return {
        isAdmin: false
      }
    },
    methods: {
      onAdminStatus(adminStatus) {
        this.isAdmin = adminStatus
      }
    },
    created() {
      if (JSON.parse(localStorage.getItem("admin")) !== null) {
        this.isAdmin = true
      }
    }
  }
</script>

<template>
  <AdminLoginForm @adminstatus="onAdminStatus" v-if="!isAdmin" />

  <section v-if="isAdmin">
    <div class="cont">
      <h1>Adminpanel</h1>
    </div>
    <ul>
      <li>
        <RouterLink class="btn btn-light" to="/messages"
          >Meddelanden</RouterLink
        >
      </li>
      <li>
        <RouterLink class="btn btn-light" to="/applications"
          >Intresseanmälningar</RouterLink
        >
      </li>
      <li>
        <RouterLink class="btn btn-light" to="/adding"
          >Lägg till djur</RouterLink
        >
      </li>
      <li>
        <RouterLink class="btn btn-light" to="/removing"
          >Ta bort till djur</RouterLink
        >
      </li>
    </ul>

    <section>
      <RouterView />
    </section>
  </section>
</template>

<style scoped>
  .cont {
    display: flex;
    justify-content: center;
    margin: 2em;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2em;
  }
  li {
    list-style: none;
  }
</style>
