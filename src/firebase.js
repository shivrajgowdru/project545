import firebase from "firebase"
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUuWUrj1k0Q-TgtUUlMQ4oer93izWoFdA",
  authDomain: "fir-b76ce.firebaseapp.com",
  databaseURL:
    "https://fir-b76ce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-b76ce",
  storageBucket: "fir-b76ce.appspot.com",
  messagingSenderId: "856358033653",
  appId: "1:856358033653:web:24dfcc6e6cd3be94b54dbc",
  measurementId: "G-4HJ6XK66KH",
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
