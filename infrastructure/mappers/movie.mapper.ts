import { CastResponse } from "../interfaces/castdb-response.interface";
import { Movie, MovieDetail } from "../interfaces/movie.interface";
import { MovieDetailResponse } from "../interfaces/moviedb-detail-response";
import { MovieDbResponse, MovieResult } from "../interfaces/moviedb-response";

export class MovieMapper {
    static fromTheMovieDBToMovie(movie: MovieResult): Movie {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        };
    }

    static fromTheMovieDBToMovieDetail(movies: MovieDetailResponse): MovieDetail {
        return {
            id: movies.id,
            title: movies.title,
            description: movies.overview,
            releaseDate: new Date(movies.release_date),
            rating: movies.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movies.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movies.backdrop_path}`,
            genres: movies.genres.map((genre) => genre.name),
            duration: movies.runtime,
            budget: movies.budget,
            originalTitle: movies.original_title,
            productionCompanies: movies.production_companies.map((company) => company.name),
        }
    }
}