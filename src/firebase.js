import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyC0Xn_R3RGuvfcJSyJQ5y1JOhrqLbw37hs",
  authDomain: "react-slack-clone-f6c2b.firebaseapp.com",
  databaseURL: "https://react-slack-clone-f6c2b.firebaseio.com",
  projectId: "react-slack-clone-f6c2b",
  storageBucket: "react-slack-clone-f6c2b.appspot.com",
  messagingSenderId: "89394836111"
};
firebase.initializeApp(config);

export default firebase;
