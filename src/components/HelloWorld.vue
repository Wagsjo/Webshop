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
  img {
    max-width: 100%;
    max-height: 9cm;
  }
</style>

<template>
  <button class="btn btn-primary">exempel1</button>
  <button class="btn btn-secondary">exempel2</button>
  <button class="btn btn-danger">exempel3</button>
  <button class="btn btn-info">exempel4</button>
  <img alt="" src="/public/favicon-196.png" />
  <p>{{ msg }}</p>
</template>
