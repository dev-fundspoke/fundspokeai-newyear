import { useState, useCallback } from 'react'
import { apiClient } from '../services/api/apiClient'
import { ApiError, ApiResponse } from '../services/api/types'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
}

interface UseApiResult<T> extends UseApiState<T> {
  execute: () => Promise<void>
  reset: () => void
}

export function useApi<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  body?: unknown
): UseApiResult<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      let response: ApiResponse<T>
      
      switch (method) {
        case 'GET':
          response = await apiClient.get<T>(endpoint)
          break
        case 'POST':
          response = await apiClient.post<T>(endpoint, body)
          break
        case 'PUT':
          response = await apiClient.put<T>(endpoint, body)
          break
        case 'DELETE':
          response = await apiClient.delete<T>(endpoint)
          break
      }

      setState({ data: response.data, loading: false, error: null })
    } catch (error) {
      setState({ 
        data: null, 
        loading: false, 
        error: error as ApiError 
      })
    }
  }, [method, endpoint, body])

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null })
  }, [])

  return { ...state, execute, reset }
}