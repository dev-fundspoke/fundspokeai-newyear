import { ChartData } from '../SimpleChart/types'

export interface Location {
  id: string
  name: string
}

export interface FinancialChartProps {
  data: ChartData[]
  type: 'line' | 'bar' | 'pie' | 'area'
  title: string
  dataKey: string
  xAxisKey: string
  yAxisKey: string
  locations?: Location[]
  colors?: string[]
}