import { HttpParams } from '../http/HttpParams'
import { MovieModel } from '../models/movie/movie.model'
import { MovieListItemModel } from '../models/movie/movieListItem.model'

export abstract class MovieRepository {
	baseUrl?: string

	abstract getMoviesPaginated(params: HttpParams): Promise<MovieListItemModel[]>
	abstract getMovieById(movieId: string, params: HttpParams): Promise<MovieModel>
}
