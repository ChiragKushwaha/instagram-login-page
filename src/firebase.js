import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBgxgKn_ZO2l9lqyWWr1aSh7mEtbxmjV0s',
  authDomain: 'instagram-co-in.firebaseapp.com',
  databaseURL: 'https://instagram-co-in.firebaseio.com',
  projectId: 'instagram-co-in',
  storageBucket: 'instagram-co-in.appspot.com',
  messagingSenderId: '268144525669',
  appId: '1:268144525669:web:b6c9e988c797041264a18c',
  measurementId: 'G-ZSG6ZPSWNK',
});

const db = firebaseApp.firestore();

export default db;
