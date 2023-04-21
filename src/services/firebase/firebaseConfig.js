// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAiGwwCkjSRF7KURlfYVIeg5B645xajbGo",
  authDomain: "tienda-barone.firebaseapp.com",
  projectId: "tienda-barone",
  storageBucket: "tienda-barone.appspot.com",
  messagingSenderId: "72657003859",
  appId: "1:72657003859:web:82cd833833224e4653ada6"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app)