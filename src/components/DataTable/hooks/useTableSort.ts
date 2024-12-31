import { useMemo, useState } from 'react'
import { SortConfig } from '../types'

export function useTableSort<T>(
  data: T[],
  initialSort?: { key: string; direction: 'asc' | 'desc' }
) {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(
    initialSort ? { key: initialSort.key, direction: initialSort.direction } : null
  )

  const sortedData = useMemo(() => {
    if (!sortConfig) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T]
      const bValue = b[sortConfig.key as keyof T]

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })
  }, [data, sortConfig])

  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  return { sortedData, sortConfig, handleSort }
}