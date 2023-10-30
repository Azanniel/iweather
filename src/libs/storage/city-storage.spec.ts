import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from './city-storage'

const city = { id: '1', name: 'Manaus', latitude: 123, longitude: 456 }

describe('Storage: City storage', () => {
  it('should returns null when city is not saved', async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it('should be return city storage', async () => {
    await saveStorageCity(city)
    const response = await getStorageCity()

    expect(response).toBeTruthy()
    expect(response).toEqual(city)
  })

  it('should be remove city storage', async () => {
    await saveStorageCity(city)
    await removeStorageCity()

    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})
