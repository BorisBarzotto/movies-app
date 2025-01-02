import { movieApi } from '../../api/movie-api';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';
import { MovieDetailResponse } from '@/infrastructure/interfaces/moviedb-detail-response';
import { MovieDetail } from '@/infrastructure/interfaces/movie.interface';

export const getMovieByIdAction = async (id: number | string): Promise<MovieDetail> => {
    try {
        const { data } = await movieApi.get<MovieDetailResponse>(`/${id}`);
        const movie = MovieMapper.fromTheMovieDBToMovieDetail(data);
        return movie;
    }
    catch (error) {
        console.log(error);
        throw "could not fetch movie id: " + id;
    }
}