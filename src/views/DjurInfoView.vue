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
    }
  }
</script>

<template>
  <main class="container-md mb-5 mt-5">
    <h1 class="text-center mb-5">{{ $route.params.id }}</h1>
    <p v-if="loading">Laddar hunden</p>
    <p v-else-if="error">ERROR!!!1</p>
    <table v-else-if="dogs" class="dogs-viewdog-table">
      <thead class="dogs-viewdog-tableheader">
        <tr class="dogs-viewdog-tableheaderrow">
          <th class="dogs-viewdog-tableheaderrow--name">Namn</th>
          <th class="dogs-viewdog-tableheaderrow--breed">Ras</th>
          <th class="dogs-viewdog-tableheaderrow--age">Ålder</th>
          <th class="dogs-viewdog-tableheaderrow--weight">Vikt</th>
          <th class="dogs-viewdog-tableheaderrow--height">Mankhöjd</th>
          <th class="dogs-viewdog-tableheaderrow--description">Om</th>
          <th class="dogs-viewdog-tableheaderrow--selected-demo" />
        </tr>
      </thead>
      <tbody class="table dogs-viewdog-tablebody">
        <tr class="dogs-viewdog-tablebodyrow" v-for="dog in dogs" :key="dog.id">
          <td class="dogs-viewdog-tablebodyrow--name">
            {{ dog.name ?? "Okänd" }}
          </td>
          <td class="dogs-viewdog-tablebodyrow--breed">
            {{ dog.breed ?? "Okänd" }}
          </td>
          <td class="dogs-viewdog-tablebodyrow--age">
            {{ dog.age ?? "-" }}
          </td>
          <td class="dogs-viewdog-tablebodyrow--weight">
            {{ dog.weight ?? "-" }}
          </td>
          <td class="dogs-viewdog-tablebodyrow--height">
            {{ dog.height ?? "-" }}
          </td>
          <td class="dogs-viewdog-tablebodyrow--description">
            {{ dog.description ?? "-" }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
