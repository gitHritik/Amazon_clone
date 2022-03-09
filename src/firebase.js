import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCABpATEgQW3f_LdXLDDUcpQND9pBrE3wU",
  authDomain: "clone-c33fc.firebaseapp.com",
  projectId: "clone-c33fc",
  storageBucket: "clone-c33fc.appspot.com",
  messagingSenderId: "160675284726",
  appId: "1:160675284726:web:3d99e8248cdc34eca74ed7",
  measurementId: "G-WX1TCTYWRR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
