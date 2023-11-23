// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFW17LBhikm52aJAllKzwymC_sI4LQ8Vc",
  authDomain: "yupon-4ce79.firebaseapp.com",
  projectId: "yupon-4ce79",
  storageBucket: "yupon-4ce79.appspot.com",
  messagingSenderId: "418529405844",
  appId: "1:418529405844:web:4e21fc8d3957b8cb82bd81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
