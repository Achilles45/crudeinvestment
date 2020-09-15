import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMGBc-4REXfGoncxWHCHsMpDzUEryAdw4",
  authDomain: "crude-marketing-ebf60.firebaseapp.com",
  databaseURL: "https://crude-marketing-ebf60.firebaseio.com",
  projectId: "crude-marketing-ebf60",
  storageBucket: "crude-marketing-ebf60.appspot.com",
  messagingSenderId: "136823826953",
  appId: "1:136823826953:web:cd93aaf22a7ddb339ae6d8",
  measurementId: "G-QJ83XD15LG"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();