// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHqPBknNgiqcOLvBY4ISJiF__hSSkqbkI",
  authDomain: "netflix-gpt-14633.firebaseapp.com",
  projectId: "netflix-gpt-14633",
  storageBucket: "netflix-gpt-14633.firebasestorage.app",
  messagingSenderId: "78829188750",
  appId: "1:78829188750:web:0dcfb2aeffbd2d33d2fbdf",
  measurementId: "G-MMRVNFM8EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();