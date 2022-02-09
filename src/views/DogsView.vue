<script>
  import { getDogs } from "../firebase"

  export default {
    created() {
      getDogs()
        .then((dogList) => {
          this.dogs = dogList
        })
        .catch((error) => {
          console.error(error)
          this.error = true
        })
        .finally(() => (this.loading = false))
    },
    data() {
      return {
        dogs: null,
        loading: true,
        error: false
      }
    },
    methods: {
      viewDog(dogId) {
        this.$router.push(`/dogs/${dogId}`)
      }
    }
  }
</script>

<template>
  <main class="container-md mb-5 mt-5">
    <h1 class="text-center mb-5">Hundar</h1>
    <p v-if="loading">Laddar hunden</p>
    <p v-else-if="error">ERROR!!!1</p>
    <table v-else-if="dogs" class="dogs-view__dog-table">
      <thead class="dogs-view__dog-table__header">
        <tr class="dogs-view__dog-table__header__row">
          <th class="dogs-view__dog-table__header__row--name">Namn</th>
          <th class="dogs-view__dog-table__header__row--breed">Ras</th>
          <th class="dogs-view__dog-table__header__row--age">Ålder</th>
          <th class="dogs-view__dog-table__header__row--weight">Vikt</th>
          <th class="dogs-view__dog-table__header__row--height">Mankhöjd</th>
          <th class="dogs-view__dog-table__header__row--selected-demo" />
        </tr>
      </thead>
      <tbody class="table dogs-view__dog-table__body">
        <tr
          class="dogs-view__dog-table__body__row"
          v-for="dog in dogs"
          :key="dog.id"
          @click="viewDog(dog.id)"
        >
          <td class="dogs-view__dog-table__body__row--name">
            {{ dog.name ?? "Okänd" }}
          </td>
          <td class="dogs-view__dog-table__body__row--breed">
            {{ dog.breed ?? "Okänd" }}
          </td>
          <td class="dogs-view__dog-table__body__row--age">
            {{ dog.age ?? "-" }}
          </td>
          <td class="dogs-view__dog-table__body__row--weight">
            {{ dog.weight ?? "-" }}
          </td>
          <td class="dogs-view__dog-table__body__row--height">
            {{ dog.height ?? "-" }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style lang="sass" scoped>
  .card-columns
    column-count: 2
  .dogs-view
    &__dog-table
      &__body
        &__row
          cursor: pointer
          &:hover
            background-color: lightslategray
</style>
