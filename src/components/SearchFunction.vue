<script>
  import { getAnimals } from "../firebase"
  /*  import { getAnimal } from "../firebase" */

  export default {
    methods: {
      viewAni(aniId) {
        this.$router.push(`/animals/${aniId}`)
      }
    },
    data() {
      return {
        fullAnimalList: null,
        search: "",
        searchArr: []
      }
    },
    computed: {
      createArr() {
        return this.fullAnimalList.forEach((element) => {
          this.searchArr.push(element.name, element.type, element.id)
          console.log(this.searchArr)
        })
      },
      filtered() {
        return this.searchArr.filter((x) => x.includes(this.search))
      }
    },
    created() {
      getAnimals().then((list) => {
        this.fullAnimalList = list
      })
    }
  }
</script>

<template>
  <div class="dropdown">
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
  </div>
</template>

<style scoped>
  .search-button {
    margin-left: 10px;
    margin-right: 4em;
  }

  .dropdown-menu {
    right: 0px;
    left: 0px;
    top: auto;
  }
  @media screen and (max-width: 502px) {
    .dropdown-menu {
      right: auto;
    }
  }
</style>
