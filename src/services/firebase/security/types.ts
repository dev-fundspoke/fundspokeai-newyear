export interface TokenVerificationError extends Error {
  code: string
  originalError?: unknown
}

export interface SecurityRuleContext {
  auth: {
    uid: string
    token: {
      email?: string
      email_verified?: boolean
      [key: string]: any
    }
  }
  resource?: any
  request?: any
}

export interface ValidationResult {
  isValid: boolean
  errors?: string[]
}