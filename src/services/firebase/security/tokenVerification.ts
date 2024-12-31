import { auth } from '../config'
import { TokenVerificationError } from './types'

export class TokenVerification {
  static async verifyToken(token: string): Promise<boolean> {
    try {
      // Verify token with Firebase Auth
      const decodedToken = await auth.currentUser?.getIdTokenResult()
      
      if (!decodedToken) {
        throw new Error('Invalid token')
      }

      // Check token expiration
      const now = Date.now() / 1000
      if (decodedToken.expirationTime && now > new Date(decodedToken.expirationTime).getTime() / 1000) {
        throw new Error('Token expired')
      }

      return true
    } catch (error) {
      const verificationError = new Error('Token verification failed') as TokenVerificationError
      verificationError.code = (error as any)?.code || 'auth/invalid-token'
      verificationError.originalError = error
      throw verificationError
    }
  }

  static async refreshToken(): Promise<string | null> {
    try {
      const user = auth.currentUser
      if (!user) {
        throw new Error('No authenticated user')
      }

      // Force token refresh
      const newToken = await user.getIdToken(true)
      return newToken
    } catch (error) {
      console.error('Token refresh failed:', error)
      return null
    }
  }
}