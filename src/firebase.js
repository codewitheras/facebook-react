// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7JyKVY1jwWYr3KFBOyU02cuSofSEA-uE",
  authDomain: "facebook-clone-12853.firebaseapp.com",
  projectId: "facebook-clone-12853",
  storageBucket: "facebook-clone-12853.appspot.com",
  messagingSenderId: "867500733931",
  appId: "1:867500733931:web:ca7012cd24977bd1bcd5ae",
  measurementId: "G-531H2WCLRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
