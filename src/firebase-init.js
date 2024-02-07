// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1oCgL7Zzs31aJbEYrVi-ceM4LbO37QGc",
  authDomain: "blogging-app-ac484.firebaseapp.com",
  projectId: "blogging-app-ac484",
  storageBucket: "blogging-app-ac484.appspot.com",
  messagingSenderId: "789656465631",
  appId: "1:789656465631:web:eb392584515019ae9fb96a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
export const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */