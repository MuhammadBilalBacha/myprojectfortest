// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkdhUipRptE4H_qnwOUu14TUWJkEGeUFA",
  authDomain: "my-wallet-3aa7a.firebaseapp.com",
  projectId: "my-wallet-3aa7a",
  storageBucket: "my-wallet-3aa7a.appspot.com",
  messagingSenderId: "266660244713",
  appId: "1:266660244713:web:8bf9c4b8f5603bcf86d478",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
