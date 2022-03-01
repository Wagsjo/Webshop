<script>
  import { getAnimal } from "../firebase"
  import { getAuth } from "firebase/auth"

  export default {
    data() {
      return {
        MinaInfo: "MinaInfo",
        animalBox: "animalBox",
        minaFavoriter: "minaFavoriter",
        firstcontainerinMinasidor: "firstcontainerinMinasidor",
        firstName: "Anna",
        lastName: "Andersson",
        eMail: "anna.andersson@hotmail.com",
        passWord: "********",
        favorites: [],
        animals: [],
        savedAnimalId: [],
        user: null
      }
    },
    mounted() {
      console.log(this.animals)
    },
    created() {
      this.getSavedAnimals()
      getAuth().onAuthStateChanged((user) => {
        this.user = user
        console.log(user)
      })
    },
    methods: {
      getSavedAnimals() {
        this.favorites = JSON.parse(localStorage.getItem("favoritesStored"))

        if (this.favorites !== null) {
          this.animals = []
          for (let n = 0; n < this.favorites.length; n++) {
            const id = this.favorites[n]
            getAnimal(id).then((animalData) => {
              this.animals.push({
                img: animalData.profileImage,
                name: animalData.name,
                id: animalData.id
              })
            })
          }
        }
      },
      removeOnClick(removeItem) {
        this.savedAnimalId = JSON.parse(localStorage.getItem("favoritesStored"))
        function filterById(item) {
          return item !== removeItem.path[1].id
        }
        const filteredList = this.savedAnimalId.filter(filterById)
        localStorage.setItem("favoritesStored", JSON.stringify(filteredList))

        this.getSavedAnimals()
      }
    }
  }
</script>
<template>
  <div class="container">
    <h1>Mina sidor</h1>
    <div :id="firstcontainerinMinasidor">
      <section :id="MinaInfo">
        <ul v-if="user">
          <li><span>Namn:</span> {{ user.displayName }}</li>
          <li><span>E-post:</span> {{ user.email }}</li>
          <li class="flex-item">
            <RouterLink to="/RedigeraMinasidor">
              <i class="icons bi-pencil-square" />
            </RouterLink>
          </li>
        </ul>
      </section>
      <section :id="minaFavoriter">
        <h2>Mina favoriter</h2>
        <section v-if="this.favorites == null">
          <p :class="animalBox">
            Du har inga sparade djur ännu..
            <i class="bi-heartbreak-fill icons" />
          </p>
        </section>
        <section :class="animalBox" v-else>
          <ul v-for="animal in animals" :key="animal.id">
            <li><img :src="animal.img" alt="animal" /></li>
            <li>{{ animal.name }}</li>
            <li
              @click.once="removeOnClick"
              class="remove-favorite"
              :id="animal.id"
            >
              Ta bort <i class="bi-x-lg" />
            </li>
          </ul>
        </section>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  main {
    margin: 2rem;
  }

  h1 {
    text-align: center;
    margin: 3rem 0;
  }

  span {
    font-weight: 800;
  }

  .icons {
    font-size: 1.5rem;
  }

  .remove-favorite {
    font-size: 0.7rem;
    color: #003fb9;
    margin-top: 0.2rem;
  }

  .bi-x-lg {
    margin-left: 0.3rem;
  }

  #MinaInfo {
    background-color: rgba(196, 196, 196, 0.43);
    font-weight: 500;

    border-radius: 5px;
    padding: 2rem;
    height: auto;
  }

  #MinaInfo > ul {
    list-style: none;
    margin: 1em;
    display: flex;
    flex-direction: column;

    .flex-item {
      margin-left: auto;
    }
  }

  #MinaInfo > ul > li {
    margin: 1em;
  }

  #minaFavoriter {
    background-color: rgba(196, 196, 196, 0.43);
    height: auto;
    padding: 2rem;
    border-radius: 5px;

    h2 {
      text-align: center;
    }
  }

  .animalBox {
    ul {
      background-color: #c4c4c4;
      list-style: none;
      padding: 20px;
      border-radius: 5px;

      li {
        width: auto;
        display: flex;
        justify-content: center;

        padding-left: 0;
      }
    }
  }

  img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  @media (min-width: 1000px) {
    #firstcontainerinMinasidor {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }

    #MinaInfo {
      width: 40%;
      margin-left: auto;
      margin-right: auto;
      padding: 1em;
      height: max-content;
      max-width: 600px;
    }

    #minaFavoriter {
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      height: max-content;
      margin-bottom: 2em;
    }
    .animalBox {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 1000px) {
    #MinaInfo {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      padding: 1em;
      overflow-wrap: break-word;
      ul {
        padding-left: 0;
      }
    }

    #minaFavoriter {
      margin-top: 2em;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2em;
    }
    .animalBox {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
