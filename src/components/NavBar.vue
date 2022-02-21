<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light bg-warning text-dark"
  >
    <RouterLink to="/" class="nav-link navbar-brand"
      ><img src="../../public/minisven.jpg" alt="Sven hittar inte hem"
    /></RouterLink>

    <!--     <div class="dropdown">
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search"
        />

        <div v-if="search">
          <button
            class="btn btn-outline-success my-2 my-sm-0 dropdown-toggle"
            type="button"
            role="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search
          </button>
          <ul
            class="dropdown-menu dropdown"
            aria-labelledby="dropdownMenuButton2"
          >
            <li
              class="dropdown-item"
              v-for="names in filtered"
              :key="names"
              @click="viewAni(names.id)"
            >
              {{ names }}
            </li>
          </ul>
        </div>
        <div v-else>
          <button
            class="btn btn-outline-success my-2 my-sm-0 dropdown-toggle"
            type="button"
            role="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search
          </button>
        </div>
      </form>
    </div> -->
    <SearchFunction />

    <div
      class="collapse navbar-collapse justify-content-between ml-3"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link">Kontakt</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link">Om</RouterLink>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
          >
            Djur
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <RouterLink class="dropdown-item" :to="{ name: 'dogsMain' }"
              >Hundar</RouterLink
            >
            <RouterLink class="dropdown-item" to="/cats">Katt</RouterLink>
            <RouterLink class="dropdown-item" to="/bird">Fågel</RouterLink>
          </div>
        </li>
      </ul>

      <div class="d-flex align-items-center">
        <RouterLink v-if="!user" to="/login" class="nav-link">
          Logga in
        </RouterLink>
        <a v-else class="nav-link" @click="logout">Logga ut</a>
        <RouterLink v-if="user" to="/minasidor" class="dropdown-item"
          ><i class="icons bi-person-fill"
        /></RouterLink>
      </div>
    </div>
    <div class="nav-item dropright">
      <button
        class="navbar-toggler dropdown"
        data-bs-toggle="dropdown"
        type="button"
        aria-expanded="false"
        aria-haspopup="true"
        id="responsiveDropdown"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="dropdown-menu" aria-labelledby="responsiveDropdown">
        <RouterLink v-if="!user" to="/login" class="dropdown-item">
          Logga in
        </RouterLink>
        <a v-else class="nav-link">Logga ut</a>
        <RouterLink v-if="user" to="/minasidor" class="dropdown-item"
          >Mina sidor
        </RouterLink>
        <RouterLink to="/about" class="dropdown-item">Om</RouterLink>
        <RouterLink to="/contact" class="dropdown-item">Kontakt</RouterLink>
        <RouterLink to="/adoptions" class="dropdown-item"
          >Adoptioner</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
<script>
  import { getAuth } from "firebase/auth"
  /* import { getAnimals } from "../firebase" */
  /*  import { getAnimal } from "../firebase" */
  import SearchFunction from "./SearchFunction.vue"
  export default {
    components: {
      SearchFunction
    },
    name: "NavBar",
    data() {
      return {
        user: null
      }
    },
    methods: {
      logout() {
        this.$router.push("/")
        getAuth().signOut()
      }
    },
    created() {
      getAuth().onAuthStateChanged((user) => {
        this.user = user
      })
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }

  .search-button {
    margin-left: 10px;
    margin-right: 4em;
  }

  .dropdown-menu {
    right: 0px;
    left: 0px;
    top: auto;
  }

  .icons {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 502px) {

    form {
      min-width: 100%;
    }

    .dropdown-menu {
      right: auto;
    }
  }
</style>
