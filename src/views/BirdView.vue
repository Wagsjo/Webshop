<script>
  import { getAnimals } from "../firebase"

  export default {
    created() {
      getAnimals("bird")
        .then((birdList) => {
          this.birds = birdList
          console.log(this.birds)
        })
        .finally(() => (this.loading = false))
    },
    data() {
      return {
        birds: null,
        loading: true
      }
    },
    methods: {
      viewBird(birdId) {
        this.$router.push(`/animals/${birdId}`)
      }
    }
  }
</script>

<template>
  <main>
    <h1 class="text-center mb-5 mt-5">Fågel</h1>
    <ul style="list-style: none" class="card-columns">
      <li class="fs-2 mb-5 text-center" v-for="bird in birds" :key="bird.id">
        <img
          class="bild mb-3"
          @click="viewBird(bird.id)"
          :src="bird.profileImage ?? '/assets/fox.jpeg'"
          alt="Sven"
        />
        <p @click="viewBird(bird.id)" class="name text-uppercase display-4">
          {{ bird.name ?? "Okänd" }}
        </p>
      </li>
    </ul>

    <RouterView />
  </main>
</template>

<style lang="sass" scoped>
  .name:hover
    color: blue
    cursor: pointer
  .bild
    border-radius: 100%
    width: 5em
    height: 5em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
  .card-columns
    column-count: 1
</style>
