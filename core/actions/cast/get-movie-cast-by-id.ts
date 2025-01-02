import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CastResponse } from "@/infrastructure/interfaces/castdb-response.interface";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async ({ id , page }: { id: number | string, page: number }): Promise<Cast[]> => {
    try {
        const { data } = await movieApi.get<CastResponse>(`/${id}/credits`, {
            params: {
                page,
            }
        });

        const cast = CastMapper.fromTheCreditsToCast(data);
        return cast;
    }
    catch (error) {
        console.log(error);
        throw "could not fetch movie id: " + id;
    }
}