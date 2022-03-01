<template>
  <input
    type="text"
    placeholder="sök bror sök.."
    v-model="searchInput"
    @TextChange="searchResults"
  />
  <ul v-if="searchInput.length > 1">
    <li v-for="animal in searchResults" :key="animal.id">
      <img
        width="40"
        height="40"
        :src="animal.profileImage ?? '/assets/fox.jpeg'"
        @click="viewAnimal(animal.id)"
        alt="Bild"
      />
      <p>{{ animal.name }}</p>
    </li>
  </ul>
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
      }
    }
  }
</script>
<style scoped>
  li {
    list-style: none;
  }
</style>
