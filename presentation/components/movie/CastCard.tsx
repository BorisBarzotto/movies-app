import { View, Image, Text } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastructure/interfaces/cast.interface'

const CastCard = ({cast}:{cast: Cast}) => {

    return (
        <View className="mx-1 rounded-lg overflow-hidden">
            <Image
                source={{ uri: cast.avatar }}
                className="shadow-sm rounded-lg w-full h-full"
                resizeMode='cover'
                style={{
                    width: 85,
                    height: 130,
                }}
            />
            <Text className="text-xs mt-1 text-center text-ellipsis">{cast.name}</Text>
        </View>
    )
}

export default CastCard