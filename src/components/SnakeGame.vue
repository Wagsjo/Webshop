<script></script>

<template>
  <div id="snakeBox">
    <h2>Play Snake Game</h2>
    <canvas />
    <div>Scores: {{ scores }}</div>

    <button class="btn btn-primary">Play</button>
  </div>
</template>

<style lang="scss" scoped>
  #snakeBox {
    // background-color: rgb(127, 197, 243);
    margin-top: 2em;
    margin-bottom: 2em;
    display: flex;
    align-content: center;
    flex-wrap: wrap;

    flex-direction: column;

    canvas {
      background-color: rgb(159, 235, 159);
      width: 300px;
      height: 300px;
      border-radius: 4px;
      margin-bottom: 1em;
    }
    button {
      width: 60px;
      height: 40px;
    }
  }
</style>
