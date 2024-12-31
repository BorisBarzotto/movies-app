import { View, Text, Pressable } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

interface Props {
    id: number,
    poster: string,
    smallPoster?: boolean,
    className?: string,
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
    return (
        <Pressable
            className={`active:opacity-90 px-2 ${className}`}
            onPress={() => router.push(`./movie/${id}`)}
        >
            <Image
                source={{ uri: poster }}
                className="shadow-lg rounded-lg w-full h-full"
                resizeMode='cover'
                style={{
                    width: smallPoster ? 85 : 150,
                    height: smallPoster ? 130 : 250,
                }}
            />
        </Pressable>
    )
}

export default MoviePoster