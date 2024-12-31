import { collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { DemographicData, EmployeeCount } from '../../components/CompanyForm/types/formTypes'

interface PersonnelData {
  management: DemographicData
  ownership: DemographicData
  employeeCount: EmployeeCount
  createdAt: Timestamp
  updatedAt: Timestamp
}

export const personnelService = {
  async createPersonnelData(companyId: string, data: Omit<PersonnelData, 'createdAt' | 'updatedAt'>) {
    if (!companyId) {
      throw new Error('Company ID is required')
    }

    try {
      // Create personnel document with a specific ID
      const personnelRef = doc(collection(db, 'companies', companyId, 'personnel'))
      
      // Save main personnel data
      await setDoc(personnelRef, {
        management: data.management,
        ownership: data.ownership,
        employeeCount: data.employeeCount,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      })

      return personnelRef.id
    } catch (error) {
      console.error('Error creating personnel data:', error)
      throw error
    }
  }
}