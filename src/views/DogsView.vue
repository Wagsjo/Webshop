<script>
  import { getDogs } from "../firebase"

  export default {
    created() {
      getDogs()
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
        error: false
      }
    },
    methods: {
      viewDog(dogId) {
        this.$router.push(`/dogs/${dogId}/info`)
        let modal = document.getElementById("DogsSida")
        modal.style.display = "none"
      }
    }
  }
</script>

<template>
  <main class="container-md mb-5 mt-5">
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
            src="/assets/fox.jpeg"
            alt="Bild"
          />
          <p @click="viewDog(dog.id)" class="Hundar text-uppercase display-4">
            {{ dog.name ?? "Okänd" }}
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
  .hundBild
    border-radius: 100%
    width: 6em
    height: 6em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
</style>
