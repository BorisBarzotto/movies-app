import React from 'react'
import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

interface Props {
    poster: string,
    title: string,
    originalTitle: string,
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
    const { height } = useWindowDimensions()
    return (
        <>
            <LinearGradient
                colors={['rgba(0,0,0,0.4)', 'transparent']}
                style={{
                    position: 'absolute',
                    zIndex: 10,
                    top: 0,
                    left: 0,
                    right: 0,
                    height: height * 0.4,
                }} />

            <View style={{
                position: 'absolute',
                zIndex: 99,
                top: 0,
                left: 0,
                right: 0,
            }}>
                <Pressable
                    onPress={() => router.dismiss()}
                    className='absolute top-5 left-5 z-10 active:scale-90'>
                    <Ionicons
                        name="arrow-back"
                        size={30}
                        color="white"
                        className='shadow' />
                </Pressable>
            </View>
            <View
                style={{ height: height * 0.7 }}
                className='shadow-xl shadow-black/20'>
                <View className='flex-1 rounded-b-3xl bg-gray-200 overflow-hidden'>
                    <Image source={{ uri: poster }} style={{ width: '100%', height: '100%' }} />
                </View>
            </View>
            <View className="text-left mx-5 mb-1">
                <Text className='text-2xl font-bold mt-5'>{title}</Text>
                <Text className='text-xl'>{originalTitle}</Text>
            </View>
        </>
    )
}

export default MovieHeader