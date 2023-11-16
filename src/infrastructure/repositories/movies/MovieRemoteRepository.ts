import { inject, injectable } from 'inversify-props'
import { MovieListItemModel } from '@/domain/models/movie/movieListItem.model'
import { MovieRepository } from '@/domain/repositories/movieRepository'
import { MovieRepositoryMapper } from './mappers/movie.mapper'
import { MovieListResponse } from './entities/movieList.entity'
import { IHttpApi } from '@/domain/http/HttpApi'
import { CONFIG_TYPES } from '@/application/types/ConfigTypes'
import { HttpParams } from '@/domain/http/HttpParams'
import { MovieModel } from '@/domain/models/movie/movie.model'
import { MovieDetailCreditsResponse, MovieDetailInfoResponse } from './entities/movie.entity'

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

	async getMovieById(movieId: string, params: HttpParams): Promise<MovieModel> {
		const movieInfo = await this.getMovieInfo(movieId, params)
		const movieDetails = await this.getMovieDetails(movieId, params)

		return Promise.resolve(this.movieMapper.movieEntityToModel(movieInfo, movieDetails))
	}

	private async getMovieInfo(movieId: string, params: HttpParams): Promise<MovieDetailInfoResponse> {
		const url = `${this.baseUrl}/${movieId}`
		const response: MovieDetailInfoResponse = await this.httpApi.get(url, params)

		return Promise.resolve(response)
	}

	private async getMovieDetails(movieId: string, params: HttpParams): Promise<MovieDetailCreditsResponse> {
		const url = `${this.baseUrl}/${movieId}/credits`
		const response: MovieDetailCreditsResponse = await this.httpApi.get(url, params)

		return Promise.resolve(response)
	}
}
