import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'

/**
 * Deletes a document from Firestore at the specified path and ID
 * @param path The path to the document in Firestore
 * @param id The ID of the document to delete
 * @throws Error if deletion fails
 */
export async function deleteDocument(path: string, id: string): Promise<void> {
  try {
    const docRef = doc(db, path, id)
    await deleteDoc(docRef)
  } catch (error) {
    console.error("Error deleting document:", error)
    throw error
  }
}