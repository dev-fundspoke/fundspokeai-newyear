import { 
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  QueryConstraint,
  DocumentData
} from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'

// Generic type for Firestore documents
export interface FirestoreDocument extends DocumentData {
  id: string
}

// Create a new document
export async function createDocument<T extends FirestoreDocument>(
  collectionName: string,
  data: Omit<T, 'id'>
): Promise<T> {
  const docRef = doc(collection(db, collectionName))
  await setDoc(docRef, data)
  return { ...data, id: docRef.id } as T
}

// Get a document by path and ID
export async function getDocumentByPath<T extends DocumentData>(
  path: string,
  id: string
): Promise<(T & { id: string }) | null> {
  try {
    const docRef = doc(db, path, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as T & { id: string }
    }
    console.log("No such document!")
    return null
  } catch (error) {
    console.error("Error fetching document:", error)
    throw error
  }
}

// Get a document by collection and ID
export async function getDocument<T extends FirestoreDocument>(
  collectionName: string,
  id: string
): Promise<T | null> {
  const docRef = doc(db, collectionName, id)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? { ...docSnap.data(), id: docSnap.id } as T : null
}

// Get all documents from a collection
export async function getDocuments<T extends FirestoreDocument>(
  collectionName: string,
  constraints: QueryConstraint[] = []
): Promise<T[]> {
  const collectionRef = collection(db, collectionName)
  const q = query(collectionRef, ...constraints)
  const querySnapshot = await getDocs(q)
  
  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  })) as T[]
}

// Update a document
export async function updateDocument<T extends FirestoreDocument>(
  collectionName: string,
  id: string,
  data: Partial<T>
): Promise<void> {
  const docRef = doc(db, collectionName, id)
  await updateDoc(docRef, data)
}

// Delete a document
export async function deleteDocument(
  collectionName: string,
  id: string
): Promise<void> {
  const docRef = doc(db, collectionName, id)
  await deleteDoc(docRef)
}

// Query documents with conditions
export async function queryDocuments<T extends FirestoreDocument>(
  collectionName: string,
  field: keyof T,
  operator: '==' | '>' | '<' | '>=' | '<=',
  value: any
): Promise<T[]> {
  const q = query(
    collection(db, collectionName),
    where(field as string, operator, value)
  )
  const querySnapshot = await getDocs(q)
  
  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  })) as T[]
}