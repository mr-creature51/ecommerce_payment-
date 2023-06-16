
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'


const firebaseConfig = {
  apiKey: "AIzaSyBrmdTCxdNWSCnkJeHMIBzAXmiBHhGZke4",
  authDomain: "ecommerce-website-825bd.firebaseapp.com",
  projectId: "ecommerce-website-825bd",
  storageBucket: "ecommerce-website-825bd.appspot.com",
  messagingSenderId: "356870621933",
  appId: "1:356870621933:web:9a844052028a1b8b659ae4"
};


firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export default firebase