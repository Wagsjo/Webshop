<template>
  <main class="mb-5 mt-5">
    <h1 class="text-center">Adoptioner</h1>
    <ul style="list-style: none" class="list">
      <li style="grid-area: cats" class="animal">
        <RouterLink class="adoptionLink" to="/cats"
          ><img class="djurBild mb-3" src="/assets/cats.png" alt="Bild" />
          <p class="text text-uppercase">Katter</p></RouterLink
        >
      </li>
      <li style="grid-area: dogs" class="animal">
        <RouterLink class="adoptionLink" to="/dogs">
          <img class="djurBild mb-3" src="/assets/dogs.jpg" alt="Bild" />
          <p class="text text-uppercase">Hundar</p></RouterLink
        >
      </li>
      <li style="grid-area: bird" class="animal">
        <RouterLink class="adoptionLink" to="/bird">
          <img class="djurBild mb-3" src="../../public/sven.jpg" alt="Bild" />
          <p class="text text-uppercase">Fågel</p></RouterLink
        >
      </li>
    </ul>
  </main>
</template>

<style scoped>
  h1 {
    font-weight: 700;
    margin-bottom: 2em;
  }
  .list {
    text-align: center;
  }
  .adoptionLink {
    text-decoration: none;
  }

  .text {
    color: black;
    font-size: 1.8em;
    letter-spacing: 0.05em;
  }

  .djurBild {
    border-radius: 50%;
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52);
  }

  @media screen and (min-width: 700px) {
    .list {
      justify-content: space-evenly;
      flex-direction: row;
      display: flex;
    }

    .djurBild {
      width: 15em;
      height: 15em;
    }

    ul {
      margin-bottom: 5em;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 700px) {
    .list {
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "cats ."
        ". dogs"
        "bird .";
    }
    .djurBild {
      width: 10em;
      height: 10em;
    }
  }
</style>
