import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1uDdc6HFRZIQFTLSufEhvOsnziffQQ3Q",
    authDomain: "tinder-clone-97034.firebaseapp.com",
    databaseURL: "https://tinder-clone-97034.firebaseio.com",
    projectId: "tinder-clone-97034",
    storageBucket: "tinder-clone-97034.appspot.com",
    messagingSenderId: "1079714222631",
    appId: "1:1079714222631:web:3ebef00d95eb23c2073402",
    measurementId: "G-DW4XLSMV80"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore();

  export default database;