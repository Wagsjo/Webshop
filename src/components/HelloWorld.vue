

<script>
  export default {
    props: {
      msg: {
        required: true,
        type: String
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <h1>Raining Cats and Dogs & Bird</h1>
  <button class='btn btn-primary' >exempel1</button>
  <button class='btn btn-secondary' >exempel2</button>
  <button class='btn btn-danger' >exempel3</button>
  <button class='btn btn-info' >exempel4</button>
  <img alt="" src="/assets/fox.jpeg" />
  <p>{{ msg }}</p>
</template>
