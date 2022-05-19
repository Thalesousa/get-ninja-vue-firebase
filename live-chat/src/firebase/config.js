import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAo0ELXqMBtW8YxwsQKEKH4-S7LVebO-8Q",
  authDomain: "tjsb-vue-chat.firebaseapp.com",
  projectId: "tjsb-vue-chat",
  storageBucket: "tjsb-vue-chat.appspot.com",
  messagingSenderId: "272726093699",
  appId: "1:272726093699:web:43c01edda5af14c57e10b6"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }