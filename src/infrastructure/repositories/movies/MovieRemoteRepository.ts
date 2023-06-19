import { inject, injectable } from 'inversify-props'
import { MovieListItemModel } from '@/domain/models/movie/movieListItem.model'
import { MovieRepository } from '@/domain/repositories/movieRepository'
import { MovieRepositoryMapper } from './mappers/movie.mapper'
import { MovieListResponse } from './entities/movie.entity'
import { IHttpApi } from '@/domain/http/HttpApi'
import { CONFIG_TYPES } from '@/application/types/ConfigTypes'
import { HttpParams } from '@/domain/http/HttpParams'

@injectable()
export class MovieRemoteRepository implements MovieRepository {
	baseUrl: string
	movieMapper = new MovieRepositoryMapper()

	constructor(@inject(CONFIG_TYPES.HTTP_API) private readonly httpApi: IHttpApi) {
		this.baseUrl = `${import.meta.env.VITE_APP_BASE_URL}/${import.meta.env.VITE_APP_API_VERSION}/${
			import.meta.env.VITE_APP_API_PREFIX
		}`
	}

	async getMoviesPaginated(params: HttpParams): Promise<MovieListItemModel[]> {
		const url = `${this.baseUrl}/now_playing`
		const response: MovieListResponse = await this.httpApi.get(url, params)

		return Promise.resolve(this.movieMapper.movieListItemEntityToModel(response.results))
	}
}
