// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhs5bRXindDsioWBBPj0loxj_oqMY17zc",
  authDomain: "kphs-my-school.firebaseapp.com",
  projectId: "kphs-my-school",
  storageBucket: "kphs-my-school.appspot.com",
  messagingSenderId: "1022781014072",
  appId: "1:1022781014072:web:06d0a1609cc60248a126cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;