import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideShow from '@/presentation/components/movies/MainSlideShow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } = useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex justify-center items-center flex-1">
        <ActivityIndicator color="blue" size={48} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View className="mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        <View className="my-4">
          <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />
        </View>
        <View className="my-4">
          <MovieHorizontalList title="Mejores Calificadas" movies={topRatedQuery.data ?? []} />
        </View>
        <View className="my-4">
          <MovieHorizontalList title="Próximamente" movies={upcomingQuery.data ?? []} />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen