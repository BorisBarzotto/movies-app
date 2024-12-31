import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularAction } from "@/core/actions/movies/popular.action";
import { topRatedAction } from "@/core/actions/movies/top-rated.action";
import { upcomingAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {

    const nowPlayingQuery = useQuery({
        queryKey: ["movies","nowPlaying"],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24,
    })

    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies","popular"],
        queryFn: ({ pageParam }) => {
            return popularAction({page: pageParam})
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages?.length + 1,
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies","topRated"],
        queryFn: ({ pageParam }) => {
            return topRatedAction({page: pageParam})
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages?.length + 1,
    })

    const upcomingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies","upcoming"],
        queryFn: ({ pageParam }) => {
            return upcomingAction({page: pageParam})
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages?.length + 1,
    })
 return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery
};
}