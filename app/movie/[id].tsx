import { View, ActivityIndicator, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import MovieDescription from '@/presentation/components/movie/MovieDescription'
import MovieHeader from '@/presentation/components/movie/MovieHeader'
import { useMovie } from '@/presentation/hooks/useMovie'
import { useCast } from '@/presentation/hooks/useCast'
import MovieCast from '@/presentation/components/movie/MovieCast'

const MovieScreen = () => {

    const { id } = useLocalSearchParams()
    const { movieQuery } = useMovie(Number(id))
    const { castQuery } = useCast(Number(id))

    console.log(castQuery.data)

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className="flex justify-center items-center h-screen">
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    return (
        <ScrollView>
            <MovieHeader
                poster={movieQuery.data.poster}
                title={movieQuery.data.title}
                originalTitle={movieQuery.data.originalTitle}
            />
            <MovieDescription movie={movieQuery.data} />
            <MovieCast title="Cast" cast={castQuery.data?.pages.flat() ?? []} />
        </ScrollView>
    )
}

export default MovieScreen