<script>
  export default {
    data() {
      return {
        phone: "073948573242",
        mail: "kontakt@rainingcatsanddogsandbird.se",
        copy: "Copyright @ 2022 Raining Cats and Dogs and Bird"
      }
    }
  }
</script>

<template>
  <div class="footer container-fluid">
    <div class="row p-2">
      <div class="col col-lg-3 m-2">
        <h3>Våra Sociala Medier</h3>
        <div class="d-flex">
          <i class="icons bi-instagram p-1" />
          <i class="icons bi-youtube p-1" />
          <i class="icons bi-twitter p-1" />
        </div>
      </div>
      <div class="col col-sm-auto m-2">
        <h3>Kontakta oss!</h3>
        <div class="d-flex">
          <i class="bi-telephone-fill p-1" />
          <p class="p-1">{{ phone }}</p>
        </div>
        <div class="d-flex">
          <i class="bi-envelope-fill p-1" />
          <p class="p-1">{{ mail }}</p>
        </div>
      </div>
    </div>

    <p class="copyright p-2 m-0">{{ copy }}</p>
  </div>
</template>

<style lang="scss" scoped>
  $footer-primary: #babacb;
  $footer-text: #000000;
  $footer-heading: #002dcb;

  .footer {
    position: sticky;
    bottom: 0;
    background-color: $footer-primary;
    color: $footer-text;

    h3 {
      color: $footer-heading;
    }

    .icons {
      font-size: 1.5rem;
    }

    .copyright {
      font-size: 0.7rem;
    }
  }
</style>
