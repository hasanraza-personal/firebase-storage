// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDemWCRw5DGGuXKfzDt8--Z6QcP5xnOLxg",
    authDomain: "zeptical-c99cd.firebaseapp.com",
    projectId: "zeptical-c99cd",
    storageBucket: "zeptical-c99cd.appspot.com",
    messagingSenderId: "144577222571",
    appId: "1:144577222571:web:8576abb7a38da0d41424ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

