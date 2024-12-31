import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { CompanyInformation } from '../../types/company'

export const companyService = {
  createCompany: async (data: Omit<CompanyInformation, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const companyData = {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      }
      
      const docRef = await addDoc(collection(db, 'companies'), companyData)
      return docRef.id
    } catch (error) {
      console.error('Error creating company:', error)
      throw error
    }
  }
}