import { ReactNode } from 'react'
import { useFormik } from 'formik'
import { CompanyFormContext } from './CompanyFormContext'
import { CompanyFormValues } from './types'
import { validationSchema } from '../validation/schema'
import { useCompanyForm } from '../hooks/useCompanyForm'
import { initialValues } from './initialValues'

interface CompanyFormProviderProps {
  children: ReactNode
}

export function CompanyFormProvider({ children }: CompanyFormProviderProps) {
  const { handleSubmit } = useCompanyForm()

  const formik = useFormik<CompanyFormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  })

  const contextValue = {
    formik,
    isSubmitting: formik.isSubmitting,
    handleSubmit
  }

  return (
    <CompanyFormContext.Provider value={contextValue}>
      {children}
    </CompanyFormContext.Provider>
  )
}