// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzaWPxxvQ_FUKlZVGWzNyirDPq2Dk3tOA",
  authDomain: "ema-john-simple-be8d2.firebaseapp.com",
  projectId: "ema-john-simple-be8d2",
  storageBucket: "ema-john-simple-be8d2.appspot.com",
  messagingSenderId: "944063883795",
  appId: "1:944063883795:web:be55d3f5272a3b56e8ade6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;