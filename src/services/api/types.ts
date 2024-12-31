export interface ApiRequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  endpoint: string
  body?: unknown
}

export interface ApiResponse<T> {
  data: T
  status: number
}

export interface ApiError extends Error {
  code: string
  details?: unknown
}

export interface ApiErrorResponse {
  message: string
  code: string
  details?: unknown
}