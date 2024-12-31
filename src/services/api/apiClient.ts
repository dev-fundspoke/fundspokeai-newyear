import { tokenService } from '../auth/tokenService'
import { ApiError, ApiRequestConfig, ApiResponse } from './types'

class ApiClient {
  private static instance: ApiClient
  private baseUrl: string
  
  private constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://bolt.new/api'
  }

  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  private async getHeaders(forceTokenRefresh = false): Promise<Headers> {
    const token = await tokenService.getAuthToken(forceTokenRefresh)
    return new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  }

  private async request<T>(config: ApiRequestConfig, retryCount = 0): Promise<ApiResponse<T>> {
    try {
      const headers = await this.getHeaders(retryCount > 0)
      
      const response = await fetch(`${this.baseUrl}${config.endpoint}`, {
        method: config.method,
        headers,
        body: config.body ? JSON.stringify(config.body) : undefined,
      })

      if (response.status === 401 && retryCount === 0) {
        // Token might be expired, retry once with force refresh
        return this.request<T>(config, 1)
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return { data, status: response.status }
    } catch (error) {
      const apiError = new Error('API request failed') as ApiError
      apiError.code = 'API_ERROR'
      apiError.details = error
      throw apiError
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'GET', endpoint })
  }

  async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'POST', endpoint, body: data })
  }

  async put<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'PUT', endpoint, body: data })
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'DELETE', endpoint })
  }
}

export const apiClient = ApiClient.getInstance()