import { Text, useWindowDimensions, View } from 'react-native';
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel"
import { useRef } from 'react';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[]
}

const MainSlideShow = ({ movies }: Props) => {

    const ref = useRef<ICarouselInstance>(null)
    const width = useWindowDimensions().width

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                ref={ref}
                width={160}
                height={350}
                data={movies}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} />
                )}
            />
        </View>
    )
}

export default MainSlideShow