<script>
  import { getAnimals } from "../firebase"

  export default {
    created() {
      getAnimals("dog")
        .then((dogList) => {
          this.dogs = dogList
          console.log(this.dogs[0])
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
        animal: null
      }
    },
    methods: {
      viewDog(dogId) {
        this.$router.push(`/animals/${dogId}`)
      }
    }
  }
</script>

<template>
  <main class="container-fluid mb-5 mt-5">
    <div id="DogsSida">
      <h1 class="text-center mb-5">Hundar</h1>
      <p v-if="loading">Laddar hunden</p>
      <p v-else-if="error">ERROR!!!1</p>
      <ul style="list-style: none" class="card-columns">
        <li class="fs-2 mb-5 text-center" v-for="dog in dogs" :key="dog.id">
          <!--Placeholder Bild-->
          <img
            class="hundBild mb-3"
            @click="viewDog(dog.id)"
            :src="dog.profileImage ?? '/assets/fox.jpeg'"
            alt="Bild"
          />
          <p @click="viewDog(dog.id)" class="Hundar text-uppercase display-4">
            {{ dog.name ?? "Okänd" }}
            hej
          </p>
        </li>
      </ul>
    </div>
    <RouterView />
  </main>
</template>

<style lang="sass" scoped>
  .card-columns
    column-count: 2
  .Hundar:hover
    color: blue
    cursor: pointer
  .hundBild
    border-radius: 100%
    width: 6em
    height: 6em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
    cursor: pointer
</style>
