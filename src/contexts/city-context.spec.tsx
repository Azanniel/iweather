import { useContext } from 'react'
import { act, renderHook, waitFor } from '@testing-library/react-native'
import { CityContext, CityContextType, CityProvider } from './city-context'

jest.mock('@/hooks/use-dashboard-route', () => {
  return {
    useDashboardRoute: jest.fn(),
  }
})

let useCityHook: () => CityContextType

describe('Context: City context', () => {
  beforeEach(() => {
    useCityHook = () => useContext(CityContext)
  })

  afterAll(() => {
    jest.unmock('@/hooks/use-dashboard-route')
  })

  it('should be able to provide default values', async () => {
    const { result } = renderHook(() => useCityHook(), {
      wrapper: CityProvider,
    })

    await act(() => {
      expect(result.current.city).toBe(null)
      expect(result.current.cityIsLoading).toBe(true)
      expect(typeof result.current.handleChanceCity).toBe('function')
    })
  })

  it('should be able to change city', async () => {
    const { result } = renderHook(() => useCityHook(), {
      wrapper: CityProvider,
    })

    const city = {
      id: '1',
      name: 'Manaus',
      latitude: 123,
      longitude: 456,
    }

    await waitFor(() => {
      act(() => {
        result.current.handleChanceCity(city)
      })
    })

    expect(result.current.city).toBeTruthy()
    expect(result.current.city).toEqual(city)
  })
})
