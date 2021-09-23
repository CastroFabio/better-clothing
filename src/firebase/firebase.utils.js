import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDSe6dS5OdpnoAO0pVjLY3BA4ZxO88qzPw",
    authDomain: "better-clothing.firebaseapp.com",
    projectId: "better-clothing",
    storageBucket: "better-clothing.appspot.com",
    messagingSenderId: "864343640586",
    appId: "1:864343640586:web:4d6b424bfe1e8a4236adf3",
    measurementId: "G-3TRSDJ3LJ4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = (() => auth.signInWithPopup(provider));

export default firebase;