import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCBrb9cYF3gRh7qiqbzICM-2-gY_pDtXYY",
  authDomain: "fundspokeai.firebaseapp.com",
  projectId: "fundspokeai",
  storageBucket: "fundspokeai.firebasestorage.app",
  messagingSenderId: "274287086526",
  appId: "1:274287086526:web:252e05c1631d316681c7ef",
  measurementId: "G-CMNK0NTK5W"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)