// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAWVJWQh9jSfuEDRtCezIKBTAt88tSlFSE",
  authDomain: "login-c0db9.firebaseapp.com",
  databaseURL: "https://login-c0db9-default-rtdb.firebaseio.com",
  projectId: "login-c0db9",
  storageBucket: "login-c0db9.appspot.com",
  messagingSenderId: "175909988167",
  appId: "1:175909988167:web:3f7602f942245cacf08e62"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
