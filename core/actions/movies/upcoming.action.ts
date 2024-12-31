import { MovieDbResponse } from '@/infrastructure/interfaces/moviedb-response';
import { movieApi } from '../../api/movie-api';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';
import { Options } from './top-rated.action';

export const upcomingAction = async ({page = 1,limit = 10}: Options) => {
    try{
        const { data } = await movieApi.get<MovieDbResponse>('/upcoming',{
            params: {
                page,
            }
        });
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    }
    catch(error){
        console.log(error);
        throw "could not fetch upcoming movies";
    }
}