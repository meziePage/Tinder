// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCVlBFEJPfENOA6QaAfZ_UX0K_MtYe0Qbk",
  authDomain: "tinder1-1b2a8.firebaseapp.com",
  projectId: "tinder1-1b2a8",
  storageBucket: "tinder1-1b2a8.appspot.com",
  messagingSenderId: "916029540080",
  appId: "1:916029540080:web:9a6e52ddeab819f7072435",
  measurementId: "G-KPSF47061X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database