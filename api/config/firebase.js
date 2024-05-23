import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyApyUbxQH7MEKdEsboSlRfXCbk7598m_aQ",
  authDomain: "inno-development.firebaseapp.com",
  projectId: "inno-development",
  storageBucket: "inno-development.appspot.com",
  messagingSenderId: "534863824407",
  appId: "1:534863824407:web:89182817313d990491be52",
  measurementId: "G-BWFD2YXRXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const analytics = getAnalytics(app);

export { db };
