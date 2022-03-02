<template>
  <div class="card position-relative">
    <div class="card-header">
      <input
        type="text"
        placeholder="sök bror sök.."
        v-model="searchInput"
        @TextChange="searchResults"
      />
    </div>

    <ul class="list-group position-absolute" v-if="searchInput">
      <li
        class="list-group-item"
        v-for="animal in searchResults"
        :key="animal.id"
        @click="viewAnimal(animal.id)"
      >
        <img
          width="40"
          height="40"
          :src="animal.profileImage ?? '/assets/fox.jpeg'"
          alt="Bild"
        />
        {{ animal.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { getAnimals } from "../firebase"

  export default {
    created() {
      getAnimals()
        .then((animalList) => {
          this.animals = animalList
        })
        .catch((error) => {
          console.error(error)
          this.error = true
        })
        .finally(() => (this.loading = false))
    },
    data() {
      return {
        animals: null,
        loading: true,
        error: false,
        searchInput: ""
      }
    },
    computed: {
      searchResults() {
        let tempAnimals = this.animals
        if (this.searchInput !== "" && this.searchInput) {
          tempAnimals = tempAnimals.filter((animal) => {
            return animal.name
              .toUpperCase()
              .includes(this.searchInput.toUpperCase())
          })
        }
        return tempAnimals
      }
    },
    methods: {
      viewAnimal(animalId) {
        this.$router.push(`/animals/${animalId}`)
        this.searchInput = ""
      }
    }
  }
</script>
<style scoped>
  .list-group {
    top: 3rem;
    z-index: 1000;
    width: 100%;
  }

  .list-group-item {
    background-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }

  .list-group :hover {
    border: solid 1.5px rgba(0, 0, 0, 0.2);
  }
</style>
