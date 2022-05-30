import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA2nxXJ-hXhhV30K7EjBhMiYrf4QcpAS1k",
  authDomain: "tjsb-muso-ninjas.firebaseapp.com",
  projectId: "tjsb-muso-ninjas",
  storageBucket: "tjsb-muso-ninjas.appspot.com",
  messagingSenderId: "586174744190",
  appId: "1:586174744190:web:ed7283a2c357eb40d07a2f"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }