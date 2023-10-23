import { api } from './api'
import { CityAPIResponse, getCityByName } from './get-city-by-name'

describe('Open Weather: Get city by name', () => {
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

  it('should be able to return city details', async () => {
    const response = await getCityByName('Manaus')

    expect(response).toBeTruthy()
    expect(response).toEqual({
      id: '1',
      name: 'Manaus, BR',
      longitude: -60,
      latitude: -3,
    })
  })
})
