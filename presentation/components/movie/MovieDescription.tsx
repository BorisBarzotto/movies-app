import { View, Text } from 'react-native'
import React from 'react'
import { MovieDetail } from '@/infrastructure/interfaces/movie.interface'
import { Formatter } from '@/config/helpers/formatter'

interface Props {
    movie: MovieDetail
}

const MovieDescription = ({ movie }: Props) => {

    return (
        <View className="mx-5">
            <View className="flex flex-row items-center justify-between border-b border-gray-300 pb-1">
                <View className="flex flex-row items-center bg-yellow-300 p-2 rounded-full">
                <Text className="text-sm">{movie.rating.toFixed(1)}</Text>
                </View>
                <Text className="italic">{movie.genres.join(", ")}</Text>
            </View>
            <Text className="font-bold mt-5 text-lg">Sinopsis</Text>
            <Text className="font-normal mt-2">{movie.description}</Text>
            <Text className="font-normal mt-2">Budget - {Formatter.currency(movie.budget)}</Text>

        </View>
    )
}

export default MovieDescription