<script>
  export default {
    created() {
      fetch("public/animals.json")
        .then((response) => response.json())
        .then((json) => {
          this.json = json
          console.log(json)
        })
    },
    data() {
      return {
        json: null
      }
    }
  }
</script>

<template>
  <main class="container-md mb-5 mt-5">
    <h1 class="text-center mb-5">Katter</h1>
    <ul
      v-if="json !== null"
      style="list-style: none"
      class="list-unstyled card-columns"
    >
      <li
        class="text-uppercase display-4 fs-2 mb-5 text-center"
        v-for="value in json.animals.cats.info"
        :key="value.name"
      >
        <!--Placeholder Bild-->
        <img
          class="kattBild mb-3"
          @click="viewDog(dog.id)"
          src="/assets/fox.jpeg"
          alt="Bild"
        />
        <p>{{ value.name }}</p>
      </li>
    </ul>
  </main>
</template>

<style lang="sass" scoped>
  .card-columns
    column-count: 2
  .kattBild
    border-radius: 100%
    width: 5em
    height: 5em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
</style>
