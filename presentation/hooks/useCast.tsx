import { getMovieCastAction } from "@/core/actions/cast/get-movie-cast-by-id"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useCast = (id: number) => {
    const castQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["cast", id],
        queryFn: ({ pageParam }) => {
            return getMovieCastAction({ id: id, page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages?.length + 1,
    })
    return {
        castQuery
    }
}