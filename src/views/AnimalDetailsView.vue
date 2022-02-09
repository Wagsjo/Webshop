<template>
  <div class="animal-details-view container my-5">
    <div class="row gx-5 gy-3 align-items-end">
      <div class="col-12 col-md-4">
        <div class="row">
          <div class="col text-center">
            <h1 class="animal-details-view__profile__header text-uppercase">
              Svea
            </h1>
          </div>
        </div>
        <div class="row text-center">
          <div class="col">
            <img
              src="/public/svea.png"
              class="img rounded-circle animal-details-view__profile__image"
              alt="Svea"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="row justify-content-center">
          <div class="col-8 col-s-6 col-md col-lg-6">
            <div class="row">
              <div class="col fw-bold">Namn</div>
              <div class="col">Svea</div>
            </div>
            <div class="row">
              <div class="col fw-bold">Ålder</div>
              <div class="col">6 månader</div>
            </div>
            <div class="row">
              <div class="col fw-bold">Färg</div>
              <div class="col">Svart</div>
            </div>
            <div class="row">
              <div class="col fw-bold">Ras</div>
              <div class="col">Labrador</div>
            </div>
            <div class="row">
              <div class="col fw-bold">Vikt</div>
              <div class="col">19kg</div>
            </div>
            <div class="row">
              <div class="col fw-bold">Höjd</div>
              <div class="col">30cm</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 animal-details-view__bottom">
        <div class="row my-4 animal-details-view__bottom__images">
          <div class="col">
            <img
              src="/public/favicon-196.png"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
          <div class="col">
            <img
              src="/public/favicon-196.png"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
          <div class="col">
            <img
              src="/public/favicon-196.png"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
        </div>
        <div class="row gy-2 animal-details-view__bottom__buttons">
          <div class="col-12 col-md-6 d-inline-flex">
            <button class="btn btn-secondary flex-fill">Ge Svea ett hem</button>
          </div>
          <div class="col-12 col-md-6 d-inline-flex">
            <button class="btn btn-outline-dark flex-fill">
              Lägg till i favoriter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AnimalDetailsView"
  }
</script>

<style lang="sass" scoped>
  .animal-details-view
    &__profile
      &__image
        width: 200px
        height: 200px

  @media screen and (max-width: 455px)
    .animal-details-view__bottom__images
      img
        width: 100px
        height: 100px
</style>
