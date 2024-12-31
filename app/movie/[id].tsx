import { useMovie } from '@/presentation/hooks/useMovie'
import { useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'

const MovieScreen = () => {

    const { id } = useLocalSearchParams()   
    const { movieQuery } = useMovie(Number(id))

    if(movieQuery.isLoading) {
        return (
            <View className="flex justify-center items-center h-screen">
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    return (
        <ScrollView>
            <Text>{movieQuery.data?.title}</Text>
        </ScrollView>
    )
}

export default MovieScreen