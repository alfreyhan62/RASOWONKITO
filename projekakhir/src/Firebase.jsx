// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4BGqMQm0e6xvIHRnGVGwGHY0QqPMqtgc",
  authDomain: "raso-wong-kito-c534e.firebaseapp.com",
  projectId: "raso-wong-kito-c534e",
  storageBucket: "raso-wong-kito-c534e.firebasestorage.app",
  messagingSenderId: "558453292737",
  appId: "1:558453292737:web:c21ebd8234d90597421e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };