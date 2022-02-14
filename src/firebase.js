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
  doc
} from "firebase/firestore/lite"
import { getStorage, ref, getDownloadURL } from "firebase/storage"

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
  measurementId: "G-TB3D0C89Y1",
  databaseURL:
    "https://cats-dogs-bird-default-rtdb.europe-west1.firebasedatabase.app/"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const animals = collection(db, "animals")
const storage = getStorage(app)
const storageRef = ref(storage, "/svea-2.jpg")

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
  animalData.id = animalSnapshot.id
  console.log(animalData)
  return animalData
}

/**
 * @typedef Animal
 * @property {string} name
 * @property {"dog"|"cat"|"bird"} type
 * @property {[number]} age
 * @property {[number]} height
 * @property {[number]} weight
 * @property {["male" | "female"]} sex
 * @property {[boolean]} castrated
 * @property {[string]} color
 */

/**
 * Add a new animal to the db
 * @param {Animal} animalData
 * @returns {Promise<DocumentReference<Animal>>}
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
  const animalObject = {
    name: animalData.name,
    type: animalData.type,
    age: animalData.age,
    height: animalData.height,
    weight: animalData.weight,
    sex: animalData.sex,
    castrated: animalData.castrated,
    color: animalData.color
  }
  return addDoc(animals, animalObject).then((ref) => getDoc(ref))
}

export async function checkStorage() {
  console.log(getDownloadURL(storageRef))
}

checkStorage()
export default {
  addAnimal,
  getAnimal,
  getAnimals
}
