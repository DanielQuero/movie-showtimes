import { MOVIE_TYPES } from '@/application/types/MovieTypes'
import { inject, injectable } from 'inversify-props'
import { MovieModel } from '../models/movie/movie.model'
import { MovieRepository } from '../repositories/movieRepository'

@injectable()
export class GetMovieDetail {
	constructor(
		@inject(MOVIE_TYPES.MOVIE_REPOSITORY)
		private movieRepository: MovieRepository,
	) {}

	async execute(movieId: string): Promise<MovieModel> {
		const params = {
			api_key: import.meta.env.VITE_APP_MOVIEDB_API_KEY,
			language: 'en-US',
			page: 1,
		}

		return await this.movieRepository.getMovieById(movieId, params)
	}
}
