import { MovieDbResponse } from '@/infrastructure/interfaces/moviedb-response';
import { movieApi } from '../../api/movie-api';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const upcomingAction = async () => {
    try{
        const { data } = await movieApi.get<MovieDbResponse>('/upcoming');
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    }
    catch(error){
        console.log(error);
        throw "could not fetch upcoming movies";
    }
}