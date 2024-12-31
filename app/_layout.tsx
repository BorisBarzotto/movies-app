import { Stack } from "expo-router"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  configureReanimatedLogger,
  ReanimatedLogLevel
} from "react-native-reanimated"
import "../global.css"


configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
})
const queryClient = new QueryClient()

const RootLayout = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Stack 
      screenOptions={{
        headerShown: false,
      }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout