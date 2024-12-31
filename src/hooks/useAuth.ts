import { useEffect, useState } from 'react'
import { authService } from '../services/auth/authService'
import { AuthState } from '../services/auth/types'

export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null
  })

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser()
        
        if (!currentUser) {
          const user = await authService.signInAnonymously()
          setState({ user, loading: false, error: null })
        } else {
          setState({ user: currentUser, loading: false, error: null })
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        setState({ 
          user: null, 
          loading: false, 
          error: error as AuthState['error']
        })
      }
    }

    initAuth()

    const unsubscribe = authService.onAuthStateChanged((user) => {
      setState(prev => ({ ...prev, user, loading: false }))
    })

    return unsubscribe
  }, [])

  return state
}