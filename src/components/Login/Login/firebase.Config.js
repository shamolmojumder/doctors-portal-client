
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB8tsZKz4TeC1Tt5vbk2MJrJkF6Nv-XLk0",
  authDomain: "doctors-portal-client-565b5.firebaseapp.com",
  projectId: "doctors-portal-client-565b5",
  storageBucket: "doctors-portal-client-565b5.appspot.com",
  messagingSenderId: "612859613917",
  appId: "1:612859613917:web:4e88f63396337a866a0134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);