<script>
  import { getAnimals } from "../firebase"

  export default {
    created() {
      getAnimals("dog")
        .then((dogList) => {
          this.dogs = dogList
          console.log(this.dogs)
        })
        .catch((error) => {
          console.error(error)
          this.error = true
        })
        .finally(() => (this.loading = false))
    },
    data() {
      return {
        dogs: null,
        loading: true,
        error: false,
        animal: null,
        selected: ""
      }
    },
    methods: {
      viewDog(dogId) {
        this.$router.push(`/animals/${dogId}`)
      },
      sortSelected() {
        if (this.selected === "A-Ö") {
          this.dogs.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            }

            if (a.name > b.name) {
              return 1
            }

            return 0
          })
        }

        if (this.selected === "Ålder") {
          this.dogs.sort((a, b) => {
            return a.age - b.age
          })
        }

        if (this.selected === "Vikt") {
          this.dogs.sort((a, b) => {
            return a.weight - b.weight
          })
        }
      }
    }
  }
</script>

<template>
  <main class="container-fluid mb-5 mt-5">
    <div id="DogsSida">
      <h1 class="text-center mb-4">Hundar</h1>

      <div
        class="d-flex flex-sm-row flex-column justify-content-center align-items-center mb-5"
      >
        <label class="m-2" for="sort-select">Sortera hundar:</label>
        <select
          class="form-select"
          aria-label="form-sort-select"
          id="sort-select"
          v-model="selected"
          @change="sortSelected"
        >
          <option disabled>Sortera hundar</option>
          <option value="A-Ö">Namn A-Ö</option>
          <option value="Ålder">Ålder - Stigande</option>
          <option value="Vikt">Vikt - Stigande</option>
        </select>
      </div>

      <p v-if="loading">Laddar hunden</p>
      <p v-else-if="error">ERROR!!!1</p>
      <div class="container">
        <ul style="list-style: none" class="row">
          <li
            class="doge fs-2 mb-5 text-center col-sm-6"
            v-for="dog in dogs"
            :key="dog.id"
          >
            <img
              class="hundBild mb-3"
              @click="viewDog(dog.id)"
              :src="dog.profileImage ?? '/assets/fox.jpeg'"
              alt="Bild"
            />
            <p
              @click="viewDog(dog.id)"
              class="Hundar text-uppercase display-4"
              style="font-size: 1em"
            >
              {{ dog.name ?? "Okänd" }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <RouterView />
  </main>
</template>
<style lang="sass" scoped>
  .form-select
    width: auto
  .doge:hover
    color: blue
    cursor: pointer
  .hundBild
    border-radius: 100%
    width: 6em
    height: 6em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
    cursor: pointer
</style>
