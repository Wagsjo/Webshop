<script>
  export default {
    data() {
      return {
        MinaInfo: "MinaInfo",
        animalBox: "animalBox",
        minaFavoriter: "minaFavoriter"
      }
    }
  }
</script>
<template>
  <h1>Mina sidor</h1>
  <section :id="MinaInfo">
    <ul>
      <li>Namn</li>
      <li>Efternamn</li>
      <li>E-post</li>
      <li>Lösenord</li>
      <li><RouterLink to="/RedigeraMinasidor"> Redigera</RouterLink></li>
    </ul>

    <!-- <input type="button" value="Redigera" /> -->
  </section>
  <section :id="minaFavoriter">
    <h2>Mina favoriter</h2>
    <section :class="animalBox">
      <ul>
        <li>Djurens bild</li>
        <li>Djurens namn</li>
      </ul>
    </section>
    <section :class="animalBox">
      <ul>
        <li>Djurens bild</li>
        <li>Djurens namn</li>
      </ul>
    </section>
  </section>
</template>

<style>
  #MinaInfo {
    background-color: #c4c4c4;
    font-weight: 500;
    padding: 1em;
    max-width: 400px;
  }
  #MinaInfo > ul {
    list-style: none;
  }
  #minaFavoriter {
    margin-top: 2em;
    background-color: #c4c4c4;
    height: auto;
    max-width: 400px;
  }
  .animalBox ul {
    list-style: none;
  }

  @media (max-width: 600px) {
    #MinaInfo {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      padding: 1em;
    }

    #minaFavoriter {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .animalBox {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
