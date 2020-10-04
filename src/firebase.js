import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuLpJTNID7avoSJQ5K0iN2pAlr6vNz-T0",
  authDomain: "fir-19ca5.firebaseapp.com",
  databaseURL: "https://fir-19ca5.firebaseio.com",
  projectId: "fir-19ca5",
  storageBucket: "fir-19ca5.appspot.com",
  messagingSenderId: "735892120771",
  appId: "1:735892120771:web:df503e63f53d07c095ee76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //uses firestore
const auth = firebase.auth();

export { db, auth };
