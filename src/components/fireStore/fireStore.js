 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBXTK1CbW9qDke3zHIM4NPCHI1G49npiAk",

    authDomain: "dfzgdfg-58b2f.firebaseapp.com",
  
    projectId: "dfzgdfg-58b2f",
  
    storageBucket: "dfzgdfg-58b2f.appspot.com",
  
    messagingSenderId: "101754343386",
  
    appId: "1:101754343386:web:80923ef8fa48525e2c3ae3"
  
 };
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);