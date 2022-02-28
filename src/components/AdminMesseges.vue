<script>
  import { getContacts } from "../firebase"
  //import {getContact} from "../firebase"

  export default {
    created() {
      getContacts()
        .then((contactlist) => {
          this.contact = contactlist
          console.log(this.contact)
        })
        .catch((error) => {
          console.error(error)
          this.error = true
        })
        .finally(() => (this.loading = false))
    },
    data() {
      return {
        contact: null,
        loading: true,
        error: false
      }
    },
    methods: {
      viewContact() {
        this.$router.push(`/contact`)
      }
    }
  }
</script>
<template>
  <main>
    <h2>Se meddelanden</h2>
    <ul>
      <li class="meddelande" v-for="con in contact" :key="con">
        <p>
          <i class="bi bi-person-fill" /><b>Förnamn:</b> {{ con.firstName }}
          <br /><i class="bi bi-person-fill" /><b>Efternamn:</b>
          {{ con.lastName }} <br />
          <i class="bi bi-mailbox2" /><b> Epost-adress:</b> {{ con.email }}
          <br />
          <i class="bi bi-telephone-fill" /><b> Mobilnummer:</b>
          {{ con.phoneNumber }} <br />
          <i class="bi bi-envelope-fill" /><b> Meddelande:</b> {{ con.message }}
        </p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
  @media (min-width: 700px) {
    main {
      margin: 2em 10%;
      padding: 2em;
    }
    .meddelande {
      width: 90%;
    }
  }
  @media (max-width: 700px) {
    main {
      padding: 1em 0.5em;
    }
  }
  main {
    background-color: rgba(196, 196, 196, 0.43);
    border-radius: 5px;
    text-align: center;
  }
  ul {
    list-style: none;
    margin: 1em auto;
  }

  .meddelande {
    background-color: rgb(194, 194, 194);
    padding: 1.5em;
    border-radius: 5px;
    margin: 1em auto;
    text-align: left;
  }
</style>
