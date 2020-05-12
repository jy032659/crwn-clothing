import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCdyGJ_UaG-rbqbcsIl44mpu3YWs4M1JM4",
    authDomain: "crwn-db-960fc.firebaseapp.com",
    databaseURL: "https://crwn-db-960fc.firebaseio.com",
    projectId: "crwn-db-960fc",
    storageBucket: "crwn-db-960fc.appspot.com",
    messagingSenderId: "630637729992",
    appId: "1:630637729992:web:ea88fd5739f986bd806dfd",
    measurementId: "G-22NSQCXZH8"
  }

  export const createUserProfileDocument=async(userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot= await userRef.get(); //90

  if(!snapShot.exists){ //storing user data 90
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
await userRef.set({
displayName,
email,
createdAt,
...additionalData

})
    }catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;
 
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
//   this gives us access to this new Google auth provider from
//   the authentication library

  provider.setCustomParameters({prompt:'select_account'})

  // what this means is that we want to always trigger the Google pop up
  // whenever we use this Google auth provider for authentication and sign in
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  //to make sure that the pop up one is the google provider

  export default firebase;
  //default sets to firebase in case we want the whole library