// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiODA_LG8WGWCu_-8njWn4TyBahuAeBgM",
    authDomain: "gdsc-hackthon.firebaseapp.com",
    projectId: "gdsc-hackthon",
    storageBucket: "gdsc-hackthon.appspot.com",
    messagingSenderId: "297130963278",
    appId: "1:297130963278:web:7c66265d9e153471bdee1f",
    measurementId: "G-F8KNCBL105"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export default app