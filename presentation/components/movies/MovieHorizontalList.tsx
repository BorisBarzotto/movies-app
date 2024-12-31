import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { View, Text, FlatList } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
    title?: string,
    movies: Movie[]
}


const MovieHorizontalList = ({ title, movies }: Props) => {
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
            />
        </View>
    )
}

export default MovieHorizontalList