import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh9W9cgMC4etAD02B1xY6jLUlcpaiOTfI",

  authDomain: "youknowmysteez-db.firebaseapp.com",

  projectId: "youknowmysteez-db",

  storageBucket: "youknowmysteez-db.appspot.com",

  messagingSenderId: "56635006581",

  appId: "1:56635006581:web:755f5e9a7b2b5996b5623c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({});
