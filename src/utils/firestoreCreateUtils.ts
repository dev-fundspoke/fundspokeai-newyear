import { collection, addDoc, DocumentData } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'

/**
 * Adds a new document to a Firestore collection
 * @param path The path to the Firestore collection
 * @param data The data to be added to the new document
 * @returns The ID of the newly created document
 */
export async function addDocument<T extends DocumentData>(
  path: string, 
  data: T
): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, path), data)
    return docRef.id
  } catch (error) {
    console.error("Error adding document:", error)
    throw error
  }
}