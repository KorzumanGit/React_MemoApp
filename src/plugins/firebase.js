import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAiizOjkNQZuJ1AZ47P097XAIURTgxT8Uw",
   authDomain: "gs-191221chat.firebaseapp.com",
   databaseURL: "https://gs-191221chat.firebaseio.com",
   projectId: "gs-191221chat",
   storageBucket: "gs-191221chat.appspot.com",
   messagingSenderId: "538094587912",
   appId: "1:538094587912:web:82f99eba7969d1150381bd",
   measurementId: "G-1C2FH4FVZ7"
};
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();
