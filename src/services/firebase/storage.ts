import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../config/firebase'

export const uploadFile = async (file: File, path: string): Promise<string> => {
  try {
    const storageRef = ref(storage, path)
    const snapshot = await uploadBytes(storageRef, file)
    return await getDownloadURL(snapshot.ref)
  } catch (error) {
    console.error('File upload error:', error)
    throw error
  }
}

export const uploadCompanyLogo = async (file: File): Promise<string> => {
  const path = `companies/logos/${Date.now()}_${file.name}`
  return uploadFile(file, path)
}