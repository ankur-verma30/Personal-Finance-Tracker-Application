// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDAiBa9PZzaPN-zRQ5KD3JThXTt3ZyGc8U",
	authDomain: "pennywise-1.firebaseapp.com",
	projectId: "pennywise-1",
	storageBucket: "pennywise-1.appspot.com",
	messagingSenderId: "942464901976",
	appId: "1:942464901976:web:fcef4dd7c2803665087b2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db,auth,doc,setDoc, provider };
