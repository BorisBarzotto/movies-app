import { useEffect, useRef } from 'react'
import { View, Text, FlatList, type NativeSyntheticEvent, type NativeScrollEvent } from 'react-native'
import MoviePoster from './MoviePoster'
import { Movie } from '@/infrastructure/interfaces/movie.interface'

interface Props {
    title?: string,
    movies: Movie[],
    loadNextPage?: () => void
}

const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200)
    },[movies])

    const isLoading = useRef(false)
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent

        const isEndReached = layoutMeasurement.width + 600 + contentOffset.x >= contentSize.width
        if (!isEndReached) return 
        isLoading.current = true
        loadNextPage && loadNextPage()      
    }

    return (
        <View>
            {title && <Text className='text-2xl font-bold px-2 mb-2'>{title}</Text>}
            <FlatList
                data={movies}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} smallPoster className='px-2' />
                )}
                onScroll={onScroll}
            />
        </View>
    )
}

export default MovieHorizontalList