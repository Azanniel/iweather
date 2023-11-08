import Search from './search'
import { render, fireEvent, waitFor, screen } from 'tests/utils/custom-render'
import { CityAPIResponse } from '@/services/open-weather/get-city-by-name'
import { api } from '@/services/open-weather/api'

jest.mock('@/hooks/use-dashboard-route', () => {
  return {
    useDashboardRoute: jest.fn(),
  }
})

describe('Screen: Search', () => {
  beforeEach(() => {
    const data: CityAPIResponse = {
      id: '1',
      name: 'Manaus',
      sys: {
        country: 'BR',
      },
      coord: {
        lon: -60,
        lat: -3,
      },
    }

    jest.spyOn(api, 'get').mockResolvedValue({ data })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    jest.unmock('@/hooks/use-dashboard-route')
  })

  it('should be able to show city option', async () => {
    const { getByTestId } = render(<Search />)

    const searchInput = getByTestId('autocomplete-input-trigger')

    fireEvent.changeText(searchInput, 'Manaus')

    const option = await waitFor(() => screen.findByText(/manaus/i))

    expect(option).toBeTruthy()
    expect(option).toHaveTextContent('Manaus, BR')
  })
})
