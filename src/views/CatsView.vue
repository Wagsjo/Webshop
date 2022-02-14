<script>
  import { getAnimals } from "../firebase"
  export default {
    created() {
      getAnimals("cat").then((catList) => {
        this.cats = catList
        console.log(this.cats)
      })
    },
    data() {
      return {
        cats: null
      }
    },
    methods: {
      viewCat(catId) {
        this.$router.push(`/cats/${catId}`)
      }
    }
  }
</script>

<template>
  <main class="container-fluid mb-5 mt-5">
    <div>
      <h1 class="text-center mb-5">Katter</h1>
      <p v-if="loading">Laddar katter</p>
      <p v-else-if="error">ERROR!!!1</p>
      <ul style="list-style: none" class="card-columns">
        <li class="fs-2 mb-5 text-center" v-for="cat in cats" :key="cat.id">
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
    <RouterView />
  </main>
</template>

<style lang="sass" scoped>
  .Katter:hover
    color: blue
    cursor: pointer
  .card-columns
    column-count: 2
  .kattBild
    border-radius: 100%
    width: 5em
    height: 5em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
</style>
