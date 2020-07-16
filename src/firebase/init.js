import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBaREQnOGpScSKxxMEH0AOEygCDn0ZZkoY",
  authDomain: "crude-marketing.firebaseapp.com",
  databaseURL: "https://crude-marketing.firebaseio.com",
  projectId: "crude-marketing",
  storageBucket: "crude-marketing.appspot.com",
  messagingSenderId: "1060346854625",
  appId: "1:1060346854625:web:7624922173f183a118cba0",
  measurementId: "G-PP2ESGDEJL"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();