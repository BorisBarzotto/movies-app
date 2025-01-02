import { useEffect, useRef } from 'react'
import { View, Text, FlatList, type NativeSyntheticEvent, type NativeScrollEvent } from 'react-native'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { Cast } from '@/infrastructure/interfaces/cast.interface'
import MoviePoster from '../movies/MoviePoster'
import CastCard from './CastCard'

interface Props {
    title?: string,
    cast: Cast[],
    loadNextPage?: () => void
}

const CastHorizontalList = ({ title, cast, loadNextPage }: Props) => {

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200)
    }, [cast])

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
            {title && <Text className='text-lg font-bold px-3 mt-2 mb-2'>{title}</Text>}
            <FlatList
                data={cast}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (<CastCard cast={item} />)}
                onScroll={onScroll}
            />
        </View>
    )
}

export default CastHorizontalList