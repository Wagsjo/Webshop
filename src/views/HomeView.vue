<script>
  import SplashScreen from "../components/SplashScreen.vue"

  export default {
    components: {
      SplashScreen
    }
  }
</script>

<template>
  <SplashScreen />
  <div class="intro container-sm p-2 my-3">
    <h2>Vi ger djur kärleksfulla hem</h2>
    <p>
      Raining Cats and Dogs and Bird är en ideell förening som räddar och
      omplacerar avlivningshotade djur från Sverige, Irland, Polen och
      Kanarieöarna.
    </p>
    <p>
      Vårt mål är att rädda avlivningshotade djur och ge dem en andra chans till
      ett lyckligt och kärleksfullt liv.
    </p>
    <p>
      Vill du hjälpa en hund, katt eller fågel samtidigt som du får en kär
      familjemedlem?
    </p>
    <p class="highlight">Då har du hittat rätt!</p>
  </div>
</template>

<style lang="scss" scoped>
  $primary: #c4c4c4;
  $secondary: #002dcb;
  .intro {
    background-color: $primary;
    text-align: center;
    border-radius: 5px;
  }

  .highlight {
    color: $secondary;
    font-weight: 800;
  }
</style>
