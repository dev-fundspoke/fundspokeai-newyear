import { doc, setDoc, DocumentData } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'

/**
 * Sets or updates a document at a specific path and ID in Firestore
 * @param path The path to the document in Firestore
 * @param id The ID of the document to set or update
 * @param data The data to be set or updated
 */
export async function setDocument<T extends DocumentData>(
  path: string,
  id: string,
  data: T
): Promise<void> {
  try {
    const docRef = doc(db, path, id)
    await setDoc(docRef, data)
  } catch (error) {
    console.error("Error setting document:", error)
    throw error
  }
}