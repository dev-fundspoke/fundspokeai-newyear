import { getIdToken } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { AuthError } from './types'

class TokenService {
  private static instance: TokenService
  private tokenCache: { [uid: string]: { token: string; expiry: number } } = {}
  
  private constructor() {}

  static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService()
    }
    return TokenService.instance
  }

  async getAuthToken(forceRefresh = false): Promise<string> {
    try {
      const user = auth.currentUser
      if (!user) {
        throw new Error('No authenticated user found')
      }

      // Check cache if not forcing refresh
      if (!forceRefresh && this.isTokenValid(user.uid)) {
        return this.tokenCache[user.uid].token
      }

      // Get fresh token
      const token = await getIdToken(user, forceRefresh)
      
      // Cache the token with expiry (1 hour)
      this.tokenCache[user.uid] = {
        token,
        expiry: Date.now() + 3600000 // 1 hour
      }

      return token
    } catch (error) {
      const authError = new Error('Failed to retrieve auth token') as AuthError
      authError.code = (error as any)?.code || 'auth/unknown'
      throw authError
    }
  }

  private isTokenValid(uid: string): boolean {
    const cached = this.tokenCache[uid]
    return cached && cached.expiry > Date.now()
  }

  clearCache(uid?: string) {
    if (uid) {
      delete this.tokenCache[uid]
    } else {
      this.tokenCache = {}
    }
  }
}

export const tokenService = TokenService.getInstance()