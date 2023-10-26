import { getStorageCity, saveStorageCity } from './city-storage'

describe('Storage: City storage', () => {
  it('should returns null when city is not saved', async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it('should be return city storage', async () => {
    const city = { id: '1', name: 'Manaus', latitude: 123, longitude: 456 }

    await saveStorageCity(city)
    const response = await getStorageCity()

    expect(response).toBeTruthy()
    expect(response).toEqual(city)
  })
})
