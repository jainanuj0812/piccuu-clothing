import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCakuGtMOFHix8NY6rdItd1oMtgWF6rkU0",
    authDomain: "piccuu-db.firebaseapp.com",
    databaseURL: "https://piccuu-db.firebaseio.com",
    projectId: "piccuu-db",
    storageBucket: "piccuu-db.appspot.com",
    messagingSenderId: "753952757294",
    appId: "1:753952757294:web:22de410f3fc29ca1f7b1bf",
    measurementId: "G-TZWX761ZZC"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName: displayName,
                email: email,
                createdAt: createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("Error while creating user ", error);
        }
    }

    return userRef;
}

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle  = () => auth.signInWithPopup(provider);

export default firebase;
