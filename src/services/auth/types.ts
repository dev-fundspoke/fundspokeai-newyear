export interface AuthUser {
  uid: string
  isAnonymous: boolean
}

export interface AuthError extends Error {
  code: string
}

export interface AuthState {
  user: AuthUser | null
  loading: boolean
  error: AuthError | null
}