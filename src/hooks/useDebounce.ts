import { useEffect, useState } from 'react'

function useDebounce<T>(value: number | string, delay?: number): T {
  // @ts-ignore
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // @ts-ignore
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce