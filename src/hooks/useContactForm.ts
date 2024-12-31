import { useCallback } from 'react'
import { useCompanyFormContext } from '../components/CompanyForm/context'
import { contactService } from '../services/company/contactService'

export function useContactForm(companyId: string) {
  const { formik } = useCompanyFormContext()

  const saveContacts = useCallback(async () => {
    try {
      await contactService.createContacts(
        companyId,
        formik.values.contacts,
        formik.values.secondaryContact
      )
      return true
    } catch (error) {
      console.error('Error saving contacts:', error)
      return false
    }
  }, [companyId, formik.values.contacts, formik.values.secondaryContact])

  return { saveContacts }
}