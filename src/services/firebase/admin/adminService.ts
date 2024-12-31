import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'
import { AdminServiceError } from './types'

class AdminService {
  private static instance: AdminService

  private constructor() {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        }),
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET
      })
    }
  }

  static getInstance(): AdminService {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService()
    }
    return AdminService.instance
  }

  getAuth() {
    return getAuth()
  }

  getFirestore() {
    return getFirestore()
  }

  getStorage() {
    return getStorage()
  }

  async verifyIdToken(token: string) {
    try {
      return await this.getAuth().verifyIdToken(token)
    } catch (error) {
      const adminError = new Error('Token verification failed') as AdminServiceError
      adminError.code = 'auth/invalid-token'
      adminError.details = error
      throw adminError
    }
  }
}

export const adminService = AdminService.getInstance()