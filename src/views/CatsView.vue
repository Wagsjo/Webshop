<script>
  import { getAnimals } from "../firebase"
  export default {
    created() {
      getAnimals("cat").then((catList) => {
        this.cats = catList
        console.log(this.cats)
      }),
        getAnimals("cat")
          .then((catList) => {
            this.cats = catList
          })
          .catch((error) => {
            console.error(error)
            this.error = true
          })
          .finally(() => (this.loading = false))
    },
    data() {
      return {
        cats: null,
        loading: true,
        error: false,
        animal: null,
        selected: ""
      }
    },
    methods: {
      viewCat(catId) {
        this.$router.push(`/animals/${catId}`)
      },
      sortSelected() {
        if (this.selected === "A-Ö") {
          this.cats.sort((a, b) => {
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
          this.cats.sort((a, b) => {
            return a.age - b.age
          })
        }

        if (this.selected === "Vikt") {
          this.cats.sort((a, b) => {
            return a.weight - b.weight
          })
        }
      }
    }
  }
</script>

<template>
  <main class="container-fluid mb-5 mt-5">
    <div>
      <h1 class="text-center mb-4">Katter</h1>

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

      <p v-if="loading">Laddar katter</p>
      <p v-else-if="error">ERROR!!!1</p>
      <div class="container">
        <ul style="list-style: none" class="row">
          <li
            class="fs-2 mb-5 text-center col-sm-6"
            v-for="cat in cats"
            :key="cat.id"
          >
            <img
              class="kattBild mb-3 Katter"
              @click="viewCat(cat.id)"
              :src="cat.profileImage ?? '/assets/fox.jpeg'"
              alt="Bild"
            />
            <p @click="viewCat(cat.id)" class="Katter text-uppercase display-4">
              {{ cat.name ?? "Okänd" }}
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
  .Katter:hover
    color: blue
    cursor: pointer
  .kattBild
    border-radius: 100%
    width: 5em
    height: 5em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
</style>
