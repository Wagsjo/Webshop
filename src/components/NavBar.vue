<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light bg-warning text-dark"
  >
    <RouterLink to="/" class="nav-link navbar-brand"
      ><img src="../../public/minisven.jpg" alt="Sven hittar inte hem"
    /></RouterLink>

    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      />
      <button
        class="btn btn-outline-success my-2 my-sm-0 search-button"
        type="submit"
      >
        Search
      </button>
    </form>
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
  <div v-for="names in searchArr" :key="names.name">{{ names }} {{ asdf }}</div>
</template>
<script>
  import { getAuth } from "firebase/auth"
  import { getAnimals } from "../firebase"
  export default {
    name: "NavBar",
    data() {
      return {
        user: null,
        fullAnimalList: null,
        search: "",
        searchArr: []
      }
    },
    computed: {
      createArr() {
        console.log(this.searchArr)
        return this.fullAnimalList.forEach((element) => {
          this.searchArr.push(element.name)
        })
      },
      asdf() {
        return this.searchArr.filter((x) => x.length > 1)
      }
    },
    methods: {
      logout() {
        this.$router.push("/")
        getAuth().signOut()
      }
      /*       filtered(inp) {
        this.fullAnimalList.forEach((element) => {
          this.searchArr.push(element.name)
          console.log(this.searchArr)
        })
        this.asdf()
      } */
    },

    /* filtered(asd) {
        let arr = null
        this.fullAnimalList.forEach((element) => {
         console.log(asd, arr)
        }
      }
      console.log(Object.values(this.fullAnimalList[0], asd))
        this.fullAnimalList.filter((x) =>
          x.includes(this.fullAnimalList[0].name)
        ) */
    created() {
      getAuth().onAuthStateChanged((user) => {
        this.user = user
      })
      getAnimals() /* .then((list) => console.log(list, this.fullAnimalList)) */
        .then((list) => {
          this.fullAnimalList = list
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
    left: auto;
    top: auto;
  }

  .icons {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 502px) {
    .navbar {
      justify-content: center;
    }

    form {
      min-width: 100%;
    }

    .dropdown-menu {
      right: auto;
    }
  }
</style>
