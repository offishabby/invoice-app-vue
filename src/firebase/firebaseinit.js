import firebase from "firebase/app";
import 'firebase/firestore'

// Here you put your firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDbGl5qY8EhplU0zguL_w3WxeuOHczWFrU",
  authDomain: "invoice-app-98320.firebaseapp.com",
  projectId: "invoice-app-98320",
  storageBucket: "invoice-app-98320.appspot.com",
  messagingSenderId: "869838189484",
  appId: "1:869838189484:web:d73bbea24fa24d359bc009",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export default app.firestore()