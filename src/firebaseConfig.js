import * as firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://dulce-nasa-daily.firebaseio.com',
  projectId: 'dulce-nasa-daily',
  storageBucket: 'dulce-nasa-daily.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: '1:1034197701360:web:62237b59cd0e4a4be16835',
  measurementId: 'G-PKQHPPQ36P',
};
  // Initialize Firebase
const firebaseConfig = firebase.initializeApp(config);
firebase.analytics();

export default firebaseConfig;
