<template>
  <section class="bgimage d-flex align-items-center">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center"
        >
          <h1 class="">Om raining cats and dogs and bird</h1>
        </div>
      </div>
    </div>
  </section>

  <div class="container-lg">
    <div class="row m-2">
      <section class="intro container p-2 my-3 col-lg-6">
        <h2>Vi ger djur kärleksfulla hem</h2>
        <p>
          Raining Cats and Dogs and Bird är en ideell förening som räddar och
          omplacerar avlivningshotade djur från Sverige, Irland, Polen och
          Kanarieöarna.
        </p>
        <p>
          Vårt mål är att rädda avlivningshotade djur och ge dem en andra chans
          till ett lyckligt och kärleksfullt liv.
        </p>
        <p>
          Vill du hjälpa en hund, katt eller fågel samtidigt som du får en kär
          familjemedlem?
        </p>
        <p class="highlight">Då har du hittat rätt!</p>
      </section>

      <section class="container my-3 col-lg-6">
        <div class="d-flex flex-column align-items-center">
          <h3>Kontaktuppgifter</h3>
          <div class="d-flex">
            <i class="bi-envelope-fill p-1" />
            <p class="p-1">kontakt@rainingcatsanddogsandbird.se</p>
          </div>
          <div class="d-flex">
            <i class="bi-telephone-fill p-1" />
            <p class="p-1">073948573242</p>
          </div>
          <div>
            <p class="p-1">Skogsgatan 4b, 3374</p>
          </div>

          <h3 class="sm-hearder">Våra Sociala Medier</h3>
          <div class="d-flex">
            <i class="icons bi-instagram p-1" />
            <i class="icons bi-youtube p-1" />
            <i class="icons bi-twitter p-1" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $primary: #c4c4c4;
  $secondary: #002dcb;

  h1 {
    text-transform: uppercase;
    color: white;
    text-shadow: 2px 2px #333;
    text-align: center;
  }

  .sm-hearder {
    color: $secondary;
  }

  .icons {
    font-size: 1.5rem;
  }

  .bgimage {
    width: 100%;
    height: 40vh;
    background: url("/assets/animals.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .intro {
    background-color: $primary;
    text-align: center;
    border-radius: 5px;
  }

  .highlight {
    color: $secondary;
    font-weight: 800;
  }

  .btn {
    border: none;
  }
</style>
