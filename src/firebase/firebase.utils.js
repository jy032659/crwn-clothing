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
    // console.log("userAuth  is")
    // console.log(userAuth)
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    
    

  const snapShot= await userRef.get(); //90


  

  if(!snapShot.exists){ //just for judging whether user exists or not 
                      // simplified form: firestore.doc(`users/${userAuth.uid}`).get().exists
    const {displayName,email}=userAuth;
    // console.log("displayname is")
    // console.log({displayName})
    const createdAt=new Date();
    try{
await userRef.set({// this set function determines what info will appear in firebase
displayName,//this lines seem not to have function, because the displayName is passed
email,      //by ...additionalData,,
createdAt,
...additionalData//pass from signup.component with this.state.playName information,
                 //rather than user.playerName

})
    }catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;
 
  }

  export const addCollectionAndDocuments= async (collectionKey, objectsToAdd)=>{
const collectionRef=firestore.collection(collectionKey);



const batch=firestore.batch();
objectsToAdd.forEach(obj=>{
const newDocRef=collectionRef.doc();
batch.set(newDocRef, obj);
})

return await batch.commit();
  }
  firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap=(collections)=>{
const transformedCollection=collections.docs.map(doc=>{
  console.log('doc.data is ',doc.data())
const{title,items}=doc.data();
return{
routeName:encodeURI(title.toLowerCase()),
id:doc.id,
title,
items
}
});
console.log("transformedcollection is ",transformedCollection)
return transformedCollection.reduce((accumulator,collection)=>{
  accumulator[collection.title.toLowerCase()]=collection;
  return accumulator
},{})
}


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