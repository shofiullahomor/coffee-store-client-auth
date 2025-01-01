// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxkpzdAEqgs49IFHkKsR-keGUqzPKhmM8",
  authDomain: "coffee-store-de88b.firebaseapp.com",
  projectId: "coffee-store-de88b",
  storageBucket: "coffee-store-de88b.firebasestorage.app",
  messagingSenderId: "234379939496",
  appId: "1:234379939496:web:9d5dcfbbe936fb492a7c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
