<script>
  import NavBar from "./components/NavBar.vue"
  import Footer from "./components/PageFooter.vue"
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app"
  import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAy5TPe01KlpysEn4azDU8gMPGmOfUqpBY",
    authDomain: "cats-dogs-bird.firebaseapp.com",
    projectId: "cats-dogs-bird",
    storageBucket: "cats-dogs-bird.appspot.com",
    messagingSenderId: "267886520586",
    appId: "1:267886520586:web:3a2adeefd1ee70fbd672f3",
    measurementId: "G-TB3D0C89Y1"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  async function getUsers(db) {
    let users = collection(db, "users")
    let userSnapshot = await getDocs(users)
    let userList = userSnapshot.docs.map((doc) => doc.data())
    console.log(userList)
    return userList
  }
  async function getDogs(db) {
    let dogs = collection(db, "dogs")
    let dogSnapshot = await getDocs(dogs)
    let dogList = dogSnapshot.docs.map((doc) => doc.data())
    console.log(dogList)
    return dogList
  }

  getUsers(db)
  getDogs(db)

  export default {
    components: {
      NavBar,
      Footer
    }
  }
</script>

<template>
  <nav>
    <NavBar />
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>
      <li>
        <RouterLink to="/login">logga in</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>
