import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA68X9ri6hB3XUiH2ybuYw6D9-d6nnQObw",
  authDomain: "booksanta-9f7cd.firebaseapp.com",
  databaseURL: "https://booksanta-9f7cd.firebaseio.com",
  projectId: "booksanta-9f7cd",
  storageBucket: "booksanta-9f7cd.appspot.com",
  messagingSenderId: "678853068413",
  appId: "1:678853068413:web:d3755c567439f66b08d314",
  measurementId: "G-10T7RD65R8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
