
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    setDoc,
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    updateDoc
} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCl2qlW5MD9koLd7wClxvNDaUeuRjuAnj0",
  authDomain: "final-proj-b5373.firebaseapp.com",
  projectId: "final-proj-b5373",
  storageBucket: "final-proj-b5373.appspot.com",
  messagingSenderId: "1018719223146",
  appId: "1:1018719223146:web:2a39969822a417d7067913"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => {
   return signInWithPopup( auth, googleProvider);
};

export const signInUser = (login, password) => {
    return signInWithEmailAndPassword(auth, login, password)
    .then((userData)=> {
        console.log("User sign in", userData);
        return userData;
    })

};

export const registerUser = (login, password) => {
    return createUserWithEmailAndPassword(auth, login, password)
    .then((userData) => {
        console.log('USER REGISTERED', userData);
    });
};

export const logout = () => {

    return signOut(auth).then(()=> {
        console.log("User is logged out")
    })
    
}

onAuthStateChanged (auth, (user) => {
 if(user) {
    console.log('User logged in', user)
 } else {
    console.log("User logged out", user)
 }
});



export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)

};

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
};




