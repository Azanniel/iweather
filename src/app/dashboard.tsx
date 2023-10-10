import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import backgroundImg from '@/assets/bg-weathers/few-clouds-night.png'
import Icon from '@/assets/icons-weathers/few-clouds-night.svg'

export default function Page() {
  return (
    <SafeAreaView className="flex-1 gap-8 bg-gray-900 p-5 pt-2">
      <ImageBackground source={backgroundImg}>
        <View>
          <Text>Porto Alegre, RS</Text>
          <Text>Segunda-feira, 15 de maio de 2023</Text>
        </View>

        <View>
          <View>
            <Text>28ºc</Text>
            <Text>26ºc / 32ºc</Text>
            <Text>Poucas nuvens</Text>
          </View>

          <Icon width={160} height={160} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
