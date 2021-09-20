import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDSe6dS5OdpnoAO0pVjLY3BA4ZxO88qzPw",
    authDomain: "better-clothing.firebaseapp.com",
    projectId: "better-clothing",
    storageBucket: "better-clothing.appspot.com",
    messagingSenderId: "864343640586",
    appId: "1:864343640586:web:4d6b424bfe1e8a4236adf3",
    measurementId: "G-3TRSDJ3LJ4"
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;