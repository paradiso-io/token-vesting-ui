import { useState, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width }
}

export default useViewport
