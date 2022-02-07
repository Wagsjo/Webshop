<script>
  export default {
    created() {
      fetch("public/animals.json")
        .then((response) => response.json())
        .then((json) => {
          this.json = json
          console.log(json.animals.dogs.info[0])
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
  <h6 v-if="json !== null">
    <p v-for="(value, name) in json.animals.dogs.info">
      {{ name }} - Name: {{ value.name }} | Age: {{ value.age }} | Color:
      {{ value.color }} | Race: {{ value.race }} Weight: {{ value.weight }} |
      Heigth: {{ value.height }} | Length: {{ value.length }} | Castrated:
      {{ value.castrated }}
    </p>
  </h6>
</template>
