// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsA6ALRpX7Pn1SPFUuJxW8C0gbJJVTtrw",
  authDomain: "react-glasses-authentica-8e6ff.firebaseapp.com",
  projectId: "react-glasses-authentica-8e6ff",
  storageBucket: "react-glasses-authentica-8e6ff.appspot.com",
  messagingSenderId: "808252025805",
  appId: "1:808252025805:web:dd617c8f7baa4e2ae7b284",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
