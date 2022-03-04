// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  addDoc,
  doc,
  setDoc
} from "firebase/firestore/lite"
import { getStorage, ref } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy5TPe01KlpysEn4azDU8gMPGmOfUqpBY",
  authDomain: "cats-dogs-bird.firebaseapp.com",
  projectId: "cats-dogs-bird",
  storageBucket: "cats-dogs-bird.appspot.com",
  databaseURL:
    "https://cats-dogs-bird-default-rtdb.europe-west1.firebasedatabase.app",
  messagingSenderId: "267886520586",
  appId: "1:267886520586:web:3a2adeefd1ee70fbd672f3",
  measurementId: "G-TB3D0C89Y1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const animals = collection(db, "animals")
const contact = collection(db, "contact")
const storage = getStorage()
const imagesRef = ref(storage, "images")

export async function checkStorage() {
  console.log(imagesRef)
}
checkStorage()

export async function getAnimals(type) {
  let animalQuery
  if (type) {
    animalQuery = query(animals, where("type", "==", type))
  } else {
    animalQuery = query(animals)
  }
  const animalSnapshot = await getDocs(animalQuery)
  let animalList = animalSnapshot.docs.map((doc) => {
    const animal = doc.data()
    animal.id = doc.id
    return animal
  })
  console.log(animalList)
  return animalList
}

export async function getAnimal(id) {
  const animalSnapshot = await getDoc(doc(db, `/animals/${id}`))
  const animalData = animalSnapshot.data()
  console.log(animalData)
  return animalData
}

/**
 * @typedef Animal
 * @typedef contact
 * @property {string} name
 * @property {"dog"|"cat"|"bird"} type
 * @property {[number]} age
 */

/**
 * Add a new animal to the db
 * @param {Animal} animalData
 * @returns {Promise<DocumentReference<Animal>>}
 * @param {contact} contactData
 * @returns {Promise<DocumentReference<contact>>}
 */
export async function addAnimal(animalData) {
  if (!animalData || typeof animalData !== "object") {
    throw new Error("Invalid data")
  }
  if (!animalData.name || animalData.name.length < 1) {
    throw new Error("Invalid name")
  }
  if (!animalData.type || animalData.type.length < 1) {
    throw new Error("Invalid type")
  }
  return addDoc(animals, animalData).then((ref) => getDoc(ref))
}

export async function addContact(contactData) {
  if (!contactData || typeof contactData !== "object") {
    throw new Error("Invalid data")
  }
  if (!contactData.firstName || contactData.email == null) {
    alert("You need to type in a email adress, and a firstname!")
    throw new Error("Invalid name")
  }
  return addDoc(contact, contactData).then((ref) => getDoc(ref))
}

export async function getContacts(type) {
  let contactQuery
  if (type) {
    contactQuery = query(contact, where("type", "==", type))
  } else {
    contactQuery = query(contact)
  }
  const contactSnapshot = await getDocs(contactQuery)
  let contactList = contactSnapshot.docs.map((doc) => {
    const contact = doc.data()
    contact.id = doc.id
    return contact
  })
  console.log(contactList)
  return contactList
}

/*export async function getContact(id) {
  const contactSnapshot = await getDoc(doc(db, `/contact/${id}`))
  const contactData = contactSnapshot.data()
  console.log(contactData)
  return contactData
}*/

export default {
  addAnimal,
  getAnimal,
  getAnimals,
  addContact,
  getContacts
  //getContact
}
