// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVDQVm2TNcBVVd1vLPxxpOFC85vKbel58",
  authDomain: "proyectoloyalty-82049.firebaseapp.com",
  databaseURL: "https://proyectoloyalty-82049-default-rtdb.firebaseio.com",
  projectId: "proyectoloyalty-82049",
  storageBucket: "proyectoloyalty-82049.appspot.com",
  messagingSenderId: "1005365615278",
  appId: "1:1005365615278:web:7b30bfdceb2cb30b40eb3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app)
export default app;