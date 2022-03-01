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
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="nav-background navbar-dark p-4">
        <a href="/admin"><h5 class="nav-text h4">Adminpanel</h5></a>
        <ul
          class="navbar-nav d-flex flex-md-row flex-column justify-content-start pe-3"
        >
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" aria-current="page" to="/messages"
              >Meddelanden</RouterLink
            >
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" aria-current="page" to="/adding"
              >Lägg till djur</RouterLink
            >
          </li>
          <li class="nav-item mx-3">
            <RouterLink class="nav-link" to="/removing"
              >Ta bort djur</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
    <nav class="navbar navbar-dark nav-background">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
    <section>
      <section class="bgimage">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-5">
              <h1>Adminpanel</h1>
            </div>
          </div>
        </div>
      </section>
      <RouterView />
    </section>
  </section>
</template>

<style>
  .nav-background {
    background-color: #002dcb;
  }

  .nav-text,
  a {
    color: white;
    text-decoration: none;
  }

  .bgimage {
    width: 100%;
    height: 80vh;
    background: url("../../assets/super-dog.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .bgimage h1 {
    color: white;
    text-shadow: 2px 2px #333;
  }
</style>
