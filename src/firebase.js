/******************************************
 *  Author : Bob Townsend
 *  Created On : Mon Apr 23 2018
 *  File : firebase.js
 *******************************************/
import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAhmvnGY9JnBpwtWrTiaVL9bSAJJn2NRro",
  authDomain: "funfoodfriends-925fa.firebaseapp.com",
  databaseURL: "https://funfoodfriends-925fa.firebaseio.com",
  projectId: "funfoodfriends-925fa",
  storageBucket: "funfoodfriends-925fa.appspot.com",
  messagingSenderId: "590725204837"
};
firebase.initializeApp(config);
export default firebase;
