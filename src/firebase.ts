import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'apiKey',
  appId: 'appId',
  authDomain: 'authdomain.firebaseapp.com',
  databaseURL: 'database.firebaseio.com',
  messagingSenderId: 'senderId',
  projectId: 'projectId',
  storageBucket: 'storagebucket.appspot.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
