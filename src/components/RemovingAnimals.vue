<script>
  import { getAnimals } from "../firebase"
  import { doc, deleteDoc, getFirestore } from "firebase/firestore"

  const db = getFirestore()
  export default {
    created() {
      getAnimals()
        .then((animalsList) => {
          this.allAnimals = animalsList
        })
        .catch((error) => {
          console.error(error)
          this.error = true
        })
        .finally(() => (this.loading = false))
    },
    data() {
      return { allAnimals: null }
    },
    methods: {
      removeAnimal(animalID) {
        let animal = document.getElementById("#animal")
        console.log(animalID)
        animal.style.backgroundColor = "grey"
        deleteDoc(doc(db, "animals", animalID))
        console.log("The animal list is updated!")
      }
    }
  }
</script>

<template>
  <main class="d-flex justify-content-center row">
    <div id="grey">
      <h1>Ta bort djur</h1>
      <p>Klicka på ett djur för att ta bort det omedelbart</p>
      <div>
        <ul class="list-group">
          <li
            id="animal"
            class="list-group-item"
            v-for="animal in allAnimals"
            @click="removeAnimal(animal.id)"
            :key="animal.id"
          >
            {{ animal.name }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
  ul {
    column-count: 2;
  }

  main {
    margin-bottom: 3em;
  }
  h1 {
    font-size: 36px;
    font-weight: bold;
  }
  h1,
  p {
    text-align: center;
  }
  div {
    width: 20em;
    text-align: center;
  }
  li:hover {
    background-color: rgb(0, 102, 255);
    cursor: pointer;
  }
</style>
