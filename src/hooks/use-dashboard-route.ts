import { useEffect, useState } from 'react'
import { router, useRootNavigation } from 'expo-router'

export function useDashboardRoute(cityAlreadySelected: boolean) {
  const [isNavigationReady, setIsNavigationReady] = useState(false)

  const rootNavigation = useRootNavigation()

  // Check if our navigation context is ready
  useEffect(() => {
    const unsubscribe = rootNavigation?.addListener('state', () => {
      setIsNavigationReady(true)
    })

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [rootNavigation])

  // Check city already selected
  useEffect(() => {
    if (!isNavigationReady) {
      return
    }

    if (cityAlreadySelected) {
      router.push('/dashboard')
    } else {
      router.push('/search')
    }
  }, [cityAlreadySelected, isNavigationReady])
}
