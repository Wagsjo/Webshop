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
    <h1 class="text-center mb-5">Fågel</h1>
    <ul v-if="json !== null" style="list-style: none">
      <li
        class="text-uppercase display-4 fs-2 text-center"
        v-for="value in json.animals.birds.info"
        :key="value.name"
      >
        <!--Placeholder Bild-->
        <img class="birdBild mb-3" src="../../public/sven.jpg" alt="Sven" />
        <p>{{ value.name }}</p>
      </li>
    </ul>
  </main>
</template>

<style lang="sass" scoped>
  .birdBild
    border-radius: 50%
    width: 5em
    height: 5em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
</style>
