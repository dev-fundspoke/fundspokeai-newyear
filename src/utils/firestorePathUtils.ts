import { collection, getDocs, DocumentData } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'

/**
 * Fetches all documents from a collection at the specified path
 * @param path The path to the Firestore collection
 * @returns Array of documents with their IDs
 */
export async function getDocuments<T extends DocumentData>(path: string): Promise<(T & { id: string })[]> {
  try {
    const querySnapshot = await getDocs(collection(db, path))
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as (T & { id: string })[]
  } catch (error) {
    console.error("Error fetching documents:", error)
    throw error
  }
}