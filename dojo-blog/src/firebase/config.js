import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDAteJ9-5D5BZUY4pH8JWFVXpE-VPoPBc",
  authDomain: "tjsb-vue-firebase-sites.firebaseapp.com",
  projectId: "tjsb-vue-firebase-sites",
  storageBucket: "tjsb-vue-firebase-sites.appspot.com",
  messagingSenderId: "367429461852",
  appId: "1:367429461852:web:d96db042d4614830f20399"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }