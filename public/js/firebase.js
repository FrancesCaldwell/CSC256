// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCmDbq_qfwHPYTBhVk6T4KvCAJOowoUgm0",
  authDomain: "blogging-website-37916.firebaseapp.com",
  projectId: "blogging-website-37916",
  storageBucket: "blogging-website-37916.appspot.com",
  messagingSenderId: "461247577965",
  appId: "1:461247577965:web:9eb095219552df9c61e464",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
