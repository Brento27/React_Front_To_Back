// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJqQ6J49V0pBan2XwhkG79sfyp0aoGy-U',
  authDomain: 'house-marketplace-app-34059.firebaseapp.com',
  projectId: 'house-marketplace-app-34059',
  storageBucket: 'house-marketplace-app-34059.appspot.com',
  messagingSenderId: '939843309046',
  appId: '1:939843309046:web:3ea975e784ad88b01e8bd7',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore;
