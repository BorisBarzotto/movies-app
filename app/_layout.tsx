import { View, Text } from 'react-native'
import "../global.css"
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'

const RootLayout = () => {

  return (
    <View>
      <Text className="text-3xl">RootLayout</Text>
    </View>
  )
}

export default RootLayout