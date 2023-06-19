import { HttpParams } from '../http/HttpParams'
import { MovieListItemModel } from '../models/movie/movieListItem.model'

export abstract class MovieRepository {
	baseUrl?: string

	abstract getMoviesPaginated(params: HttpParams): Promise<MovieListItemModel[]>
}
