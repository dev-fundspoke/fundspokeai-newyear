import { collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { AnnualFinancials, FinancialStatement } from './types'

export const financialService = {
  async createAnnualFinancials(
    companyId: string, 
    data: Omit<AnnualFinancials, 'createdAt' | 'updatedAt'>
  ) {
    const yearId = data.year.toString()
    const docRef = doc(
      collection(db, `companies/${companyId}/companies_financials/data/annualFinancials`),
      yearId
    )

    await setDoc(docRef, {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    })

    return yearId
  },

  async createFinancialStatement(
    companyId: string,
    data: Omit<FinancialStatement, 'createdAt' | 'updatedAt'>
  ) {
    const docRef = doc(
      collection(db, `companies/${companyId}/companies_financials/data/financialStatements`)
    )

    await setDoc(docRef, {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    })

    return docRef.id
  }
}