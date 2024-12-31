import { signInAnonymously, onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase/config'
import { AuthError, AuthUser } from './types'

class AuthService {
  private static instance: AuthService
  
  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async signInAnonymously(): Promise<AuthUser> {
    try {
      const { user } = await signInAnonymously(auth)
      return this.transformUser(user)
    } catch (error) {
      throw this.handleError(error)
    }
  }

  onAuthStateChanged(callback: (user: AuthUser | null) => void): () => void {
    return onAuthStateChanged(auth, (user) => {
      callback(user ? this.transformUser(user) : null)
    })
  }

  getCurrentUser(): Promise<AuthUser | null> {
    return new Promise((resolve) => {
      const unsubscribe = this.onAuthStateChanged((user) => {
        unsubscribe()
        resolve(user)
      })
    })
  }

  private transformUser(user: User): AuthUser {
    return {
      uid: user.uid,
      isAnonymous: user.isAnonymous
    }
  }

  private handleError(error: unknown): AuthError {
    const authError = error as AuthError
    authError.code = authError.code || 'auth/unknown'
    return authError
  }
}

export const authService = AuthService.getInstance()