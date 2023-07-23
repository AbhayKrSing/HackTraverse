import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBCRLzuXKQscR58kkoi31Tb1U44dNESe9A",
    authDomain: "hacktransverse.firebaseapp.com",
    projectId: "hacktransverse",
    storageBucket: "hacktransverse.appspot.com",
    messagingSenderId: "671861738060",
    appId: "1:671861738060:web:50623565a88be2355582e9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const CreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
export const SignInWithEmailAndPassword = signInWithEmailAndPassword;
export const SignOut = signOut;