import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfnLrNPmbcgJ7lPuh0_tLN27tfR51IxD8",
  authDomain: "movieverse-d83e4.firebaseapp.com",
  projectId: "movieverse-d83e4",
  storageBucket: "movieverse-d83e4.appspot.com",
  messagingSenderId: "225820258221",
  appId: "1:225820258221:web:177cb50138d3eecc30bb24",
  measurementId: "G-4CWW0GT0T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
