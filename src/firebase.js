import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAUQhVrtSOLyzosiYKnWY0ekjrgwAwxiOw',
    authDomain: 'unichat-b7576.firebaseapp.com',
    projectId: 'unichat-b7576',
    storageBucket: 'unichat-b7576.appspot.com',
    messagingSenderId: '104432896700',
    appId: '1:104432896700:web:cd671d002bbf5e9ab79eb9',
  })
  .auth();
