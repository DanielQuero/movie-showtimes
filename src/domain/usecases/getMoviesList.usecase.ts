import { MOVIE_TYPES } from '@/application/types/MovieTypes'
import { inject, injectable } from 'inversify-props'
import { MovieListItemModel } from '../models/movie/movieListItem.model'
import { MovieRepository } from '../repositories/movieRepository'

@injectable()
export class GetMoviesList {
	constructor(
		@inject(MOVIE_TYPES.MOVIE_REPOSITORY)
		private movieRepository: MovieRepository,
	) {}

	async execute(): Promise<MovieListItemModel[]> {
		const params = {
			api_key: import.meta.env.VITE_APP_MOVIEDB_API_KEY,
			language: 'es-ES',
			page: 1,
		}
		return await this.movieRepository.getMoviesPaginated(params)
	}
}
