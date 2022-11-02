// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBa66k0H20A6yKwBa7Gs52wPMZ5Mv3098Q',
  authDomain: 'todo-app-e2b13.firebaseapp.com',
  projectId: 'todo-app-e2b13',
  storageBucket: 'todo-app-e2b13.appspot.com',
  messagingSenderId: '787830956884',
  appId: '1:787830956884:web:92ca0a553035aa88ff9ec1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
