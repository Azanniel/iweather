import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@iweather:city'

export interface City {
  id: string
  name: string
  longitude: number
  latitude: number
}

export async function getStorageCity(): Promise<City | null> {
  const response = await AsyncStorage.getItem(STORAGE_KEY)
  const city = response ? JSON.parse(response) : null

  return city
}

export async function saveStorageCity(city: City) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(city))
}

export async function removeStorageCity() {
  await AsyncStorage.removeItem(STORAGE_KEY)
}
