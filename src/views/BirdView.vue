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
        {{ value.name }}
      </li>
    </ul>
  </main>
</template>
