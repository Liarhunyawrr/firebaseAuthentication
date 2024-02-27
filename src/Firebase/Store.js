// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUKWRbnne7QGSnjKn3faJQ4b_n9rfRXJo",
  authDomain: "full-stack-37926.firebaseapp.com",
  projectId: "full-stack-37926",
  storageBucket: "full-stack-37926.appspot.com",
  messagingSenderId: "452378682010",
  appId: "1:452378682010:web:21f498a87fddec99cfb523",
  databaseURL: "https://full-stack-37926-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
