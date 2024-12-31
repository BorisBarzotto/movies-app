import { MovieDbResponse } from '@/infrastructure/interfaces/moviedb-response';
import { movieApi } from '../../api/movie-api';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';
import { Options } from './top-rated.action';

export const nowPlayingAction = async () => {
    try{
        const { data } = await movieApi.get<MovieDbResponse>('/now_playing');
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    }
    catch(error){
        console.log(error);
        throw "could not fetch now playing movies";
    }
}