<script>
  export default {
    data() {
      return {
        MinaInfo: "MinaInfo",
        animalBox: "animalBox",
        minaFavoriter: "minaFavoriter",
        firstcontainerinMinasidor: "firstcontainerinMinasidor",
        firstName: "Anna",
        lastName: "Andersson",
        eMail: "anna.andersson@hotmail.com",
        passWord: "********",
        animalNameFirst: "Nisse",
        animalNameSecond: "Misse"
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
          <li><span>Namn:</span> {{ firstName }}</li>
          <li><span>Efternamn:</span> {{ lastName }}</li>
          <li><span>E-post:</span> {{ eMail }}</li>
          <li><span>Lösenord:</span> {{ passWord }}</li>
          <li>
            <RouterLink to="/RedigeraMinasidor">
              <i class="icons bi-pencil-square" />Redigera</RouterLink
            >
          </li>
        </ul>

        <!-- <input type="button" value="Redigera" /> -->
      </section>
      <section :id="minaFavoriter">
        <h2>Mina favoriter</h2>
        <section :class="animalBox">
          <ul>
            <li><img src="/assets/animals.jpg" alt="animal" /></li>
            <li>{{ animalNameFirst }}</li>
            <li class="remove-favorite">Ta bort <i class="bi-x-lg" /></li>
          </ul>
        </section>
        <section :class="animalBox">
          <ul>
            <li><img src="/assets/fox.jpeg" alt="animal" /></li>
            <li>{{ animalNameSecond }}</li>
            <li class="remove-favorite">Ta bort <i class="bi-x-lg" /></li>
          </ul>
        </section>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    margin: 2rem;
  }

  h1 {
    text-align: center;
  }

  span {
    font-weight: 800;
  }

  .icons {
    font-size: 1.5rem;
  }

  .remove-favorite {
    font-size: 0.6rem;
    color: #003fb9;
  }

  #MinaInfo {
    background-color: rgba(196, 196, 196, 0.43);
    font-weight: 500;

    border-radius: 5px;
    padding: 2rem;
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
    background-color: rgba(196, 196, 196, 0.43);
    height: auto;
    border-radius: 5px;
    padding: 2rem;
    h2 {
      text-align: center;
    }
  }

  .animalBox {
    ul {
      background-color: #c4c4c4;
      list-style: none;
      padding: 0;

      li {
        width: auto;
        display: flex;
        justify-content: center;

        padding-left: 0;
      }
    }
  }

  img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  @media (min-width: 820px) {
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
      height: 20em;
      max-width: 600px;
      margin-top: 5em;
    }

    #minaFavoriter {
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      min-height: 500px;
      margin-bottom: 2em;
    }
  }

  @media (max-width: 820px) {
    #MinaInfo {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      padding: 1em;
      max-width: 400px;
      font-size: 12px;
      ul {
        padding-left: 0;
      }
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
