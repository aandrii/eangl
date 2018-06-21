//import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBR3r_B4KwG3n9QwzfbTfUPL8dS2MKkHCs",
  authDomain: "eanglish-38501.firebaseapp.com",
  databaseURL: "https://eanglish-38501.firebaseio.com"
};

firebase.initializeApp(config)
export const ref = firebase.database().ref();
export const resf = firebase.database();
export const firebaseAuth = firebase.auth;
/* firebase.initializeApp(config);

// Get a reference to the database service
//const database = firebase.database();
const firebaseApp = firebase.initializeApp(config);
const database = firebaseApp.firebase.database();
// This is a named export
export { firebaseApp };

// this is a default export
export default database; */