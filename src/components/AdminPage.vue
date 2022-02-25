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
    <nav>
      <h1>Adminpanel</h1>
      <ul>
        <li><RouterLink to="/messages">Meddelanden</RouterLink></li>
        <li><RouterLink to="/applications">Intresseanmälningar</RouterLink></li>
        <li><RouterLink to="/adding">Lägg till djur</RouterLink></li>
      </ul>
    </nav>

    <section>
      <RouterView />
    </section>
  </section>
</template>
