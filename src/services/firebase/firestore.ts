import { collection, addDoc, Timestamp, DocumentData } from 'firebase/firestore'
import { db } from '../../config/firebase'

export const createDocument = async <T extends DocumentData>(
  collectionName: string,
  data: T
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    })
    return docRef.id
  } catch (error) {
    console.error(`Error creating document in ${collectionName}:`, error)
    throw error
  }
}