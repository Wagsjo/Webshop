<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light bg-warning text-dark"
  >
    <RouterLink to="/" class="nav-link navbar-brand">Logo</RouterLink>

    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
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
            <RouterLink class="dropdown-item" to="/dogs">Hundar</RouterLink>
            <RouterLink class="dropdown-item" to="/cats">Katt</RouterLink>
            <RouterLink class="dropdown-item" to="/bird">Fågel</RouterLink>
          </div>
        </li>
      </ul>

      <div class="d-flex align-items-center">
        <RouterLink to="/login" class="nav-link">Logga in</RouterLink>
        <RouterLink to="/minasidor" class="nav-link"
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
        <RouterLink to="/login" class="dropdown-item">Logga in</RouterLink>
        <RouterLink to="/minasidor" class="dropdown-item"
          >Mina sidor
        </RouterLink>
        <RouterLink to="/about" class="dropdown-item">Om</RouterLink>
        <RouterLink to="/contact" class="dropdown-item">Kontakt</RouterLink>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: "NavBar"
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
