<script>
  export default {
    data() {
      return {
        MinaInfo: "MinaInfo",
        animalBox: "animalBox",
        minaFavoriter: "minaFavoriter",
        firstcontainerinMinasidor: "firstcontainerinMinasidor"
      }
    }
  }
</script>
<template>
  <main>
    <h1>Mina sidor</h1>
    <div :id="firstcontainerinMinasidor">
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
    </div>
  </main>
</template>

<style>
  #MinaInfo {
    background-color: #c4c4c4;
    font-weight: 500;

    max-width: 400px;
  }
  #MinaInfo > ul {
    list-style: none;
    margin: 1em;
  }
  #MinaInfo > ul > li {
    margin: 1em;
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

  @media (min-width: 600px) {
    #firstcontainerinMinasidor {
      display: flex;

      flex-direction: row;
      justify-content: space-around;
      height: 30em;
    }
    #MinaInfo {
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      padding: 1em;
      height: 15em;
      margin-top: 5em;
    }

    #minaFavoriter {
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      height: auto;
      margin-bottom: 2em;
    }
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
