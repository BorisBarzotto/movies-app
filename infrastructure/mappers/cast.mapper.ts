import { Cast } from "../interfaces/cast.interface";
import { CastMember, CastResponse } from "../interfaces/castdb-response.interface";

export class CastMapper {
    static fromTheCreditsToCast(credits: CastResponse): Cast[] {
        return credits.cast.map((actor: CastMember) => {
            return {
                id: actor.id,
                name: actor.name,
                character: actor.character ?? "No character",
                avatar: actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : `https://i.stack.imgur.com/l60Hf.png`,
            }
        });
    }
}