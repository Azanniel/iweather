/* eslint-disable camelcase */
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito'
import { Loading } from '@/components/loading'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  })

  return (
    <SafeAreaProvider className="flex-1 bg-gray-900">
      <StatusBar style="light" backgroundColor="transparent" translucent />

      {fontsLoaded ? <Slot /> : <Loading />}
    </SafeAreaProvider>
  )
}
