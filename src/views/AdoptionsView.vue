<template>
  <main class="mb-5 mt-5">
    <h1 class="text-center mb-5">Adoptioner</h1>
    <ul style="list-style: none" class="text-center">
      <li>
        <RouterLink class="adoptionLink" to="/dogs">
          <!--Placeholder Bild-->
          <img class="djurBild mb-3" src="/assets/fox.jpeg" alt="Bild" />
          <p>Hundar</p></RouterLink
        >
      </li>
      <li>
        <RouterLink class="adoptionLink" to="/cats"
          ><!--Placeholder Bild--><img
            class="djurBild mb-3"
            src="/assets/fox.jpeg"
            alt="Bild"
          />
          <p>Katter</p></RouterLink
        >
      </li>
      <li>
        <RouterLink class="adoptionLink" to="/bird"
          ><!--Placeholder Bild-->
          <img class="djurBild mb-3" src="/assets/fox.jpeg" alt="Bild" />
          <p>Fågel</p></RouterLink
        >
      </li>
    </ul>
  </main>
</template>

<style lang="sass" scoped>
  .djurBild
    border-radius: 50%
    width: 8em
    height: 8em
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52)
  .adoptionLink
    text-decoration: none
  ul li
    margin-bottom: 2em
</style>
