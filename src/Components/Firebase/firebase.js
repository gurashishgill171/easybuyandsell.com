import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCBQyzFEbv_Wh8rx6De43KBSarJP6_a0lo",
    authDomain: "easybuyandsell-7849b.firebaseapp.com",
    projectId: "easybuyandsell-7849b",
    storageBucket: "easybuyandsell-7849b.appspot.com",
    messagingSenderId: "1074760413486",
    appId: "1:1074760413486:web:9417a43f6eebb1aebe4abf",
    measurementId: "G-B3QN807TV3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth = firebase.auth();