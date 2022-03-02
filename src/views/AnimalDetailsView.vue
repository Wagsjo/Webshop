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
              :src="animal.profileImage ?? '/public/sven196.jpg'"
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
              :src="animal.image1 ?? '/public/sven196.jpg'"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
          <div class="col">
            <img
              :src="animal.image2 ?? '/public/sven196.jpg'"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
          <div class="col">
            <img
              :src="animal.image3 ?? '/public/sven196.jpg'"
              class="rounded-circle"
              alt="Svea"
            />
          </div>
        </div>
        <div class="row gy-2 animal-details-view__bottom__buttons">
          <div class="col-12 col-md-6 d-inline-flex">
            <button
              class="btn btn-secondary flex-fill"
              v-if="user === null"
              @click="checkAuth"
            >
              Ge {{ animal.name }} ett hem
            </button>
            <button
              @click="modalTrueOrFalseFunc"
              class="btn btn-secondary flex-fill"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              v-if="user !== null"
            >
              Ge {{ animal.name }} ett hem
            </button>
          </div>
          <div class="col-12 col-md-6 d-inline-flex">
            <button
              class="btn btn-outline-dark flex-fill"
              @click="addToFavorite"
            >
              {{ btnAdd }}
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
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="exampleModalLabel"
            v-if="modalTrueOrFalse"
          >
            Ansökningsformulär för {{ animal.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <form class="row g-3">
            <div class="col-md-6 mt-3">
              <label for="firstName" class="form-label">Förnamn</label>
              <input type="text" class="form-control" id="firstName" required />
            </div>
            <div class="col-md-6 mt-3">
              <label for="lastName" class="form-label">Efternamn</label>
              <input type="text" class="form-control" id="lastName" required />
            </div>
            <div class="col-md-8">
              <label for="adressInfo" class="form-label">Adress</label>
              <input
                type="text"
                class="form-control"
                id="adressInfo"
                required
              />
            </div>
            <div class="class col-md-4">
              <label for="postCode" class="form-label">Postnummer</label>
              <input type="text" class="form-control" id="postCode" required />
            </div>
            <div class="col-md-8">
              <label for="emailInfo" class="form-label">E-Mail</label>
              <input
                type="email"
                class="form-control"
                id="emailInfo"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="phoneNumber" class="form-label">Telefonnummer</label>
              <input
                type="text"
                class="form-control"
                id="phoneNumber"
                placeholder="+46"
                required
              />
            </div>

            <div class="col-md-12">
              <label for="comments" class="form-label"
                >Berätta lite om varför just du skall få bli ägare</label
              >
              <textarea class="form-control" id="comments" rows="3" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Stäng
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addToApplications"
          >
            Skicka ansökan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getAnimal } from "../firebase"
  import { getAuth } from "firebase/auth"

  export default {
    name: "AnimalDetailsView",
    data: () => {
      return {
        loading: true,
        error: false,
        animal: null,
        animalId: null,
        favorites: [],
        btnAdd: "Lägg till i favoriter",
        applications: [],

        user: null,
        modalTrueOrFalse: false
      }
    },
    created() {
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user
        }
      })
      const id = this.$route.params.id
      getAnimal(id).then((animalData) => {
        this.animal = animalData
        this.animalId = id

        /*         if (localStorage.getItem("favoritesStored").includes(id)) {
          this.btnAdd = "Sparad"
        } */
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
      checkAuth() {
        this.$router.push("/login")
      },
      addToFavorite() {
        this.btnAdd = "Sparad"
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
      },
      // // addToApplications
      addToApplications() {
        console.log(this.animalId)

        if (localStorage.getItem("submittedApplication") === null) {
          this.applications.push(this.animalId)
          localStorage.setItem(
            "submittedApplication",
            JSON.stringify(this.applications)
          )
        } else if (
          !localStorage.getItem("submittedApplication").includes(this.animalId)
        ) {
          this.applications = JSON.parse(
            localStorage.getItem("submittedApplication")
          )
          this.applications.push(this.animalId)
          localStorage.setItem(
            "submittedApplication",
            JSON.stringify(this.applications)
          )
        }
        // alert()
        // localStorage.clear()
      },
      modalTrueOrFalseFunc() {
        this.modalTrueOrFalse = true
      }
      // // addtoapplications
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
