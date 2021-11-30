import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCrKnzT8YOgUgoP8umjK9Qy0Dql8JgwZPQ',
  authDomain: 'valorarte-aebdf.firebaseapp.com',
  projectId: 'valorarte-aebdf',
  storageBucket: 'valorarte-aebdf.appspot.com',
  messagingSenderId: '108550213755',
  appId: '1:108550213755:web:a9736a8af2f0de2d7592de',
};

const getFirebase = () => initializeApp(firebaseConfig);

export default getFirebase;
