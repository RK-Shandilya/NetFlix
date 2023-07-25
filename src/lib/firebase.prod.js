import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config = {
  apiKey: "AIzaSyD7Y2NGwfuGCa8wZYolaqn8QiE8aeY8Dyo",
  authDomain: "netflix-app-52733.firebaseapp.com",
  projectId: "netflix-app-52733",
  storageBucket: "netflix-app-52733.appspot.com",
  messagingSenderId: "947172392627",
  appId: "1:947172392627:web:240afae3d6a88f55773ac6"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth,firebase};
export default db;
