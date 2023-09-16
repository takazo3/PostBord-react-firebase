
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from"firebase/auth";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCvs0u4AwhbfdwX8IgV6a3Pp_9eS54UK50",
  authDomain: "blog-4aefa.firebaseapp.com",
  projectId: "blog-4aefa",
  storageBucket: "blog-4aefa.appspot.com",
  messagingSenderId: "111406890050",
  appId: "1:111406890050:web:1519c6d2105ecbdd9ac1db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export { auth, provider, db };