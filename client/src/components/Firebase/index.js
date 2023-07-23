import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBCRLzuXKQscR58kkoi31Tb1U44dNESe9A",
    authDomain: "hacktransverse.firebaseapp.com",
    projectId: "hacktransverse",
    messagingSenderId: "671861738060",
    appId: "1:671861738060:web:50623565a88be2355582e9",
    storageBucket: 'gs://hacktransverse.appspot.com'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
export const CreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
export const SignInWithEmailAndPassword = signInWithEmailAndPassword;
export const SignOut = signOut;
// export const storageRef = ref(storage, 'some-child')