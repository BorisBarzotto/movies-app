import { MovieDbResponse } from '@/infrastructure/interfaces/moviedb-response';
import { movieApi } from '../../api/movie-api';

export const nowPlayingAction = async () => {
    try{
        const { data } = await movieApi.get<MovieDbResponse>('/now_playing');
        console.log(data);
        return []
    }
    catch(error){
        console.log(error);
        throw "could not fetch now playing movies";
    }
}