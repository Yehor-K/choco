import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKOJ9UsXUUCKVQk697XJKaACuHcmfCyHQ",
    authDomain: "choco-harmoni.firebaseapp.com",
    databaseURL: "https://choco-harmoni-default-rtdb.firebaseio.com",
    projectId: "choco-harmoni",
    storageBucket: "choco-harmoni.appspot.com",
    messagingSenderId: "246186770296",
    appId: "1:246186770296:web:daaad9d0d9a46cee8a928d",
    measurementId: "G-KZR941JN7T"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;