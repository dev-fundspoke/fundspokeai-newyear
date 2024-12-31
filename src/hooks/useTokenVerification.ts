import { useState, useCallback } from 'react'
import { TokenVerification } from '../services/firebase/security'
import { TokenVerificationError } from '../services/firebase/security/types'

interface UseTokenVerificationResult {
  isVerifying: boolean
  error: TokenVerificationError | null
  verifyToken: (token: string) => Promise<boolean>
  refreshToken: () => Promise<string | null>
}

export function useTokenVerification(): UseTokenVerificationResult {
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState<TokenVerificationError | null>(null)

  const verifyToken = useCallback(async (token: string) => {
    setIsVerifying(true)
    setError(null)

    try {
      const isValid = await TokenVerification.verifyToken(token)
      return isValid
    } catch (err) {
      const error = err as TokenVerificationError
      setError(error)
      return false
    } finally {
      setIsVerifying(false)
    }
  }, [])

  const refreshToken = useCallback(async () => {
    try {
      return await TokenVerification.refreshToken()
    } catch (error) {
      console.error('Token refresh failed:', error)
      return null
    }
  }, [])

  return { isVerifying, error, verifyToken, refreshToken }
}