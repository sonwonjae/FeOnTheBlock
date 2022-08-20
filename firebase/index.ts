// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJLCUoCZrwE80mCDjys-Ny8Wkw8TmtRfQ',
  authDomain: 'feontheblock.firebaseapp.com',
  projectId: 'feontheblock',
  storageBucket: 'feontheblock.appspot.com',
  messagingSenderId: '514544230131',
  appId: '1:514544230131:web:9d91d823fe2ada92826186',
  measurementId: 'G-0KT0R4KB0B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };
