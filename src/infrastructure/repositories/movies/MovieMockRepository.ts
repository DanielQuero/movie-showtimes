import { injectable } from 'inversify-props'
import { MovieListItemModel } from '@/domain/models/movie/movieListItem.model'
import { MovieRepository } from '@/domain/repositories/movieRepository'
import { movieListMocked } from '@/infrastructure/mocks/movies/movieList.mock'
import { MovieRepositoryMapper } from './mappers/movie.mapper'

@injectable()
export class MovieMockRepository implements MovieRepository {
	baseUrl: string
	movieMapper = new MovieRepositoryMapper()

	constructor() {
		this.baseUrl = `${import.meta.env.VITE_APP_BASE_URL}/${import.meta.env.VITE_APP_API_VERSION}/${
			import.meta.env.VITE_APP_API_PREFIX
		}`
	}

	async getMoviesPaginated(): Promise<MovieListItemModel[]> {
		return Promise.resolve(this.movieMapper.movieListItemEntityToModel(movieListMocked.results))
	}
}
