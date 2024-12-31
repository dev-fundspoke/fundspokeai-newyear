import { useCallback } from 'react'
import { FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'
import { CompanyFormValues } from '../context/types'
import { companyService } from '../../../../../services/company/companyService'
import { handleError } from '../../../../../utils/errorHandling'

export function useCompanyForm() {
  const navigate = useNavigate()

  const handleSubmit = useCallback(async (
    values: CompanyFormValues,
    helpers: FormikHelpers<CompanyFormValues>
  ) => {
    try {
      helpers.setSubmitting(true)
      helpers.setStatus({ error: null })

      // Validate required logo file
      if (!values.logoFile) {
        throw new Error('Company logo is required')
      }

      // Create company with logo
      const response = await companyService.createCompanyWithLogo({
        companyName: values.companyName,
        corporationNumber: values.corporationNumber,
        federalBusinessRegistryNumber: values.federalBusinessRegistryNumber,
        organizationType: values.organizationType,
        sector: values.sector,
        incorporationDate: values.incorporationDate,
        customerSatisfactionScore: values.customerSatisfactionScore,
        grantMatchScore: values.grantMatchScore,
        innovationScore: values.innovationScore,
        queryPerformanceScore: values.queryPerformanceScore,
        totalEmployeeCount: values.totalEmployeeCount
      }, values.logoFile)

      if (response.success && response.companyId) {
        navigate(`/companies/${response.companyId}`)
      } else {
        throw new Error('Failed to create company')
      }
    } catch (error) {
      const appError = handleError(error)
      console.error('Error creating company:', appError)
      helpers.setStatus({ 
        error: appError.message || 'Failed to create company. Please try again.'
      })
    } finally {
      helpers.setSubmitting(false)
    }
  }, [navigate])

  return { handleSubmit }
}