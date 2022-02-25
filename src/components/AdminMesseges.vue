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
  <h2>Se meddelenanden</h2>
  <li v-for="con in contact" :key="con">
    <p>
      First name: {{ con.firstName }} <br />
      Last name: {{ con.lastName }} <br />
      Email: {{ con.email }} <br />
      Phone number: {{ con.phoneNumber }} <br />
      Message: {{ con.message }}
    </p>
  </li>
</template>
