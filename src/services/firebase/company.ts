import { collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../config/firebase'
import { CompanyFormValues } from '../../components/CompanyForm/types/formTypes'
import { CompanyInformation } from '../../types/company'

/**
 * Creates a new company document in Firestore
 */
export async function createCompany(
  companyId: string, 
  data: CompanyFormValues
): Promise<void> {
  try {
    const companyRef = doc(collection(db, 'companies'), companyId)
    
    const companyData: Omit<CompanyInformation, 'id'> = {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      // Convert Date objects to Firestore Timestamps
      incorporationDate: data.incorporationDate ? Timestamp.fromDate(data.incorporationDate) : null,
      aiAnalysis: {
        ...data.aiAnalysis,
        aiAnalysisDate: data.aiAnalysis.aiAnalysisDate ? 
          Timestamp.fromDate(data.aiAnalysis.aiAnalysisDate) : null
      }
    }

    await setDoc(companyRef, companyData)
  } catch (error) {
    console.error('Error creating company:', error)
    throw new Error('Failed to create company')
  }
}

/**
 * Uploads a company logo to Firebase Storage
 */
export async function uploadCompanyLogo(
  companyId: string, 
  file: File
): Promise<string> {
  try {
    // Create a reference to the logo file
    const fileName = `${Date.now()}_${file.name}`
    const logoRef = ref(storage, `companies/${companyId}/logos/${fileName}`)

    // Upload the file
    const snapshot = await uploadBytes(logoRef, file)

    // Get the download URL
    const downloadUrl = await getDownloadURL(snapshot.ref)
    return downloadUrl
  } catch (error) {
    console.error('Error uploading company logo:', error)
    throw new Error('Failed to upload company logo')
  }
}