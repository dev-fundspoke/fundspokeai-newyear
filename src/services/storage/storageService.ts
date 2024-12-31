import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../config/firebase'

export const storageService = {
  uploadFile: async (file: File, path: string): Promise<string> => {
    try {
      const storageRef = ref(storage, path)
      const snapshot = await uploadBytes(storageRef, file)
      return await getDownloadURL(snapshot.ref)
    } catch (error) {
      console.error('File upload error:', error)
      throw error
    }
  },

  uploadCompanyLogo: async (file: File): Promise<string> => {
    const path = `companies/logos/${Date.now()}_${file.name}`
    return storageService.uploadFile(file, path)
  }
}