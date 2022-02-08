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
        class="text-uppercase display-4 fs-2 mb-4 text-center"
        v-for="value in json.animals.cats.info"
        :key="value.name"
      >
        {{ value.name }}
      </li>
    </ul>
  </main>
</template>

<style>
  .card-columns {
    column-count: 2;
  }
</style>
