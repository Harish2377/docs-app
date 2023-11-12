import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {

    
  apiKey: "AIzaSyCAufG05Z_P6txEYzO4uTR9DCeZKoMk27E",
  authDomain: "docs-app-91345.firebaseapp.com",
  projectId: "docs-app-91345",
  storageBucket: "docs-app-91345.appspot.com",
  messagingSenderId: "119498055987",
  appId: "1:119498055987:web:596d0078c5b55614e19e46"

};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)