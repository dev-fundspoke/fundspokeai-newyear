import { auth } from '../../config/firebase'
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth'

export const isAuthenticated = () => auth.currentUser !== null

export const signInAnonymousUser = async () => {
  try {
    await signInAnonymously(auth)
  } catch (error) {
    console.error('Anonymous auth error:', error)
    throw error
  }
}

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback)
}