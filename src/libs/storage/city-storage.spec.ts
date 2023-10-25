import { getStorageCity } from './city-storage'

describe('Storage: City storage', () => {
  it('should returns null when city is not saved', async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })
})
