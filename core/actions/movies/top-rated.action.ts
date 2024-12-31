import { MovieDbResponse } from '@/infrastructure/interfaces/moviedb-response';
import { movieApi } from '../../api/movie-api';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const topRatedAction = async () => {
    try{
        const { data } = await movieApi.get<MovieDbResponse>('/top_rated');
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    }
    catch(error){
        console.log(error);
        throw "could not fetch top rated movies";
    }
}