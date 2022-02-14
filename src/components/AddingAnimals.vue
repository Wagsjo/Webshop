<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-6 col-xl-4 col-xxl-3">
        <form @submit.prevent>
          <div class="mb-3">
            <select class="form-select" @change="setType" :disabled="loading">
              <option selected>Välj en typ</option>
              <option v-for="t in types" :key="t.id" :value="t.id">
                {{ t.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="nameField" class="form-label">Namn</label>
            <input
              type="text"
              class="form-control"
              id="nameField"
              required
              v-model="animal.name"
              :disabled="loading"
            />
          </div>
          <div class="mb-3">
            <label for="ageField" class="form-label">Ålder</label>
            <input
              type="number"
              class="form-control"
              id="ageField"
              required
              v-model="animal.age"
              :disabled="loading"
            />
          </div>
          <div class="mb-3">
            <label for="colorField" class="form-label">Färg</label>
            <input
              type="text"
              class="form-control"
              id="colorField"
              required
              v-model="animal.color"
              :disabled="loading"
            />
          </div>
          <div class="mb-3">
            <label for="breedField" class="form-label">Ras</label>
            <input
              type="text"
              class="form-control"
              id="breedField"
              required
              v-model="animal.breed"
              :disabled="loading"
            />
          </div>
          <div class="mb-3">
            <label for="weightField" class="form-label">Vikt</label>
            <input
              type="number"
              class="form-control"
              id="weightField"
              required
              v-model="animal.weight"
              :disabled="loading"
            />
          </div>
          <div class="mb-3">
            <label for="heightField" class="form-label">Mankhöjd</label>
            <input
              type="number"
              class="form-control"
              id="heightField"
              required
              v-model="animal.height"
              :disabled="loading"
            />
          </div>
          <div class="mb-3">
            <select class="form-select" @change="setSex" :disabled="loading">
              <option selected>Välj kön</option>
              <option>Tik</option>
              <option>Hane</option>
            </select>
          </div>
          <div class="mb-3">
            <select
              class="form-select"
              @change="setCastrated"
              :disabled="loading"
            >
              <option selected>Kastrerad</option>
              <option>Ja</option>
              <option>Nej</option>
            </select>
          </div>
          <div class="row mb-3 px-2">
            <button
              v-if="!loading"
              class="btn btn-primary"
              type="submit"
              :disabled="!isValid || loading"
              @click="addAnimal"
            >
              Add Animal
            </button>
            <div v-else class="progress p-0" style="height: 38px">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import firebase from "../firebase"

  const types = [
    {
      id: "dog",
      name: "Hund"
    },
    {
      id: "cat",
      name: "Katt"
    },
    {
      id: "bird",
      name: "Fågel"
    }
  ]

  export default {
    name: "AddingAnimals",
    data() {
      return {
        animal: {
          name: null,
          age: null,
          breed: null,
          type: null,
          color: null,
          height: null,
          weight: null,
          sex: null,
          castrated: null
        },
        loading: false,
        error: false
      }
    },
    computed: {
      types() {
        return types
      },
      isValid() {
        return this.validateForm(this.animal)
      }
    },
    methods: {
      validateForm(data) {
        return (
          data.name?.length &&
          data.age != null &&
          data.breed?.length &&
          data.type != null
        )
      },
      setType(event) {
        this.animal.type = event?.target?.value
      },
      setSex(event) {
        this.animal.sex = event?.target?.value
      },
      setCastrated(event) {
        this.animal.castrated = event?.target?.value
      },
      addAnimal: function () {
        this.loading = true
        this.error = false

        firebase
          .addAnimal(this.animal)
          .then((docRef) => {
            console.log("addAnimal:", docRef.id, docRef.data())
            this.$router.push(`/animals/${docRef.id}`)
          })
          .catch((err) => {
            console.error(err)
            this.error = true
          })
          .finally(() => {
            this.loading = false
          })
      }
    }
  }
</script>

<style scoped></style>

<!--
age: ageIn,
breed: breedIn,
castrated: castratedIn,
color: colorIn,
description: descriptionIn,
height: heightIn,
id: newId,
name: nameIn,
sex: sexIn,
type: typeIn,
weight: weightIn-->
