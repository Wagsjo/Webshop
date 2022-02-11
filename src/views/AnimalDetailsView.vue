<template>
  <div class="animal-details-view container my-5">
    <div v-if="animal" class="row gx-5 gy-3 align-items-end">
      <div class="col-12 col-md-4">
        <div class="row">
          <div class="col text-center">
            <h1 class="animal-details-view__profile__header text-uppercase">
              {{ animal.name }}
            </h1>
          </div>
        </div>
        <div class="row text-center">
          <div class="col">
            <img
              :src="animal.profileImage ?? '/public/favicon-196.png'"
              class="img rounded-circle animal-details-view__profile__image"
              alt="svea"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col">
            {{ animal.description }}
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="row justify-content-center">
          <div class="col-8 col-s-6 col-md col-lg-6">
            <div class="row">
              <div class="col fw-bold">Namn</div>
              <div class="col text-capitalize">
                {{ animal.name ?? "okänd" }}
              </div>
            </div>
            <div class="row">
              <div class="col fw-bold">Ålder</div>
              <div class="col text-capitalize">{{ realAge }}</div>
            </div>
            <div class="row">
              <div class="col fw-bold">Färg</div>
              <div class="col text-capitalize">
                {{ animal.color ?? "okänd" }}
              </div>
            </div>
            <div class="row">
              <div class="col fw-bold">Ras</div>
              <div class="col text-capitalize">
                {{ animal.breed ?? "okänd" }}
              </div>
            </div>
            <div class="row">
              <div class="col fw-bold">Vikt</div>
              <div class="col">
                {{ realWeight }}
              </div>
            </div>
            <div class="row">
              <div class="col fw-bold">Höjd</div>
              <div class="col">{{ realHeight }}</div>
            </div>
            <div class="row">
              <div class="col fw-bold">Kön</div>
              <div class="col text-capitalize">{{ realSex }}</div>
            </div>
            <div class="row">
              <div class="col fw-bold">Kastrerad</div>
              <div class="col text-capitalize">{{ realCast }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 animal-details-view__bottom">
        <div class="row my-4 animal-details-view__bottom__images">
          <div class="col">
            <img
              :src="animal.image1 ?? '/public/favicon-196.png'"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
          <div class="col">
            <img
              :src="animal.image2 ?? '/public/favicon-196.png'"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
          <div class="col">
            <img
              :src="animal.image3 ?? '/public/favicon-196.png'"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
        </div>
        <div class="row gy-2 animal-details-view__bottom__buttons">
          <div class="col-12 col-md-6 d-inline-flex">
            <button class="btn btn-secondary flex-fill">
              Ge {{ animal.name }} ett hem
            </button>
          </div>
          <div class="col-12 col-md-6 d-inline-flex">
            <button
              class="btn btn-outline-dark flex-fill"
              @click="addToFavorite"
            >
              Lägg till i favoriter
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div v-if="loading" class="col-12 col-md-4">Loading</div>
      <div v-else-if="error" class="col-12 col-md-4">Error</div>
    </div>
  </div>
</template>

<script>
  import { getAnimal } from "../firebase"

  export default {
    name: "AnimalDetailsView",
    data: () => {
      return {
        loading: true,
        error: false,
        animal: null,
        animalId: null,
        favorites: []
      }
    },
    created() {
      const id = this.$route.params.id
      getAnimal(id).then((animalData) => {
        this.animal = animalData
        this.animalId = id
      })
    },
    computed: {
      realAge() {
        if (this.animal.age == null) {
          return "okänd"
        }
        if (this.animal.age < 12) {
          return `${this.animal.age} månader`
        }
        return `${Math.round(this.animal.age / 12)} år`
      },

      realWeight() {
        if (this.animal.weight == null) {
          return "-"
        }
        return `${this.animal.weight} kg `
      },
      realHeight() {
        if (this.animal.height == null) {
          return "-"
        }
        return `${this.animal.height} cm `
      },
      realSex() {
        if (this.animal.sex === "female") {
          return "Tik"
        } else if (this.animal.sex === "male") {
          return "Hane"
        } else if (this.animal.sex == null) {
          return "Okänt"
        }
        return this.animal.sex
      },
      realCast() {
        if (this.animal.castrated === true) {
          return "ja"
        }
        return "nej"
      }
    },
    methods: {
      addToFavorite() {
        if (localStorage.getItem("favoritesStored") === null) {
          this.favorites.push(this.animalId)
          localStorage.setItem(
            "favoritesStored",
            JSON.stringify(this.favorites)
          )
        } else if (
          !localStorage.getItem("favoritesStored").includes(this.animalId)
        ) {
          this.favorites = JSON.parse(localStorage.getItem("favoritesStored"))
          this.favorites.push(this.animalId)
          localStorage.setItem(
            "favoritesStored",
            JSON.stringify(this.favorites)
          )
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .animal-details-view
    &__profile
      &__image
        width: 200px
        height: 200px

    &__bottom__images
      img
        width: 128px
        height: 128px

  @media screen and (max-width: 455px)
    .animal-details-view__bottom__images
      img
        width: 100px
        height: 100px
</style>
