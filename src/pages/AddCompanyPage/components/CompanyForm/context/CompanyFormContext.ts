import { createContext } from 'react'
import { CompanyFormContextType } from './types'

export const CompanyFormContext = createContext<CompanyFormContextType | null>(null)