// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACr8z_XXe95toSgexgiJ8_X6u_BZkuw7c",
  authDomain: "fir-ambox.firebaseapp.com",
  projectId: "fir-ambox",
  storageBucket: "fir-ambox.appspot.com",
  messagingSenderId: "57673328727",
  appId: "1:57673328727:web:adb193ced86683c8df5b12",
  measurementId: "G-D447EEH0YK",
};

const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
provider.setCustomParameters({   
    prompt : "select_account "
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

/* Auth */
export const signInWithGithubPopup = () => signInWithPopup(auth, providerGithub)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/* DB */
export const db = getFirestore(app)