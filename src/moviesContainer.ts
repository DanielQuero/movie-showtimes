import { container } from 'inversify-props'
import { CONFIG_TYPES } from './application/types/ConfigTypes'
import { MOVIE_TYPES } from './application/types/MovieTypes'
import { IHttpApi } from './domain/http/HttpApi'
import { IUrlBuilder } from './domain/http/UrlBuilder'
import { MovieRepository } from './domain/repositories/movieRepository'
import { GetMoviesList } from './domain/usecases/getMoviesList.usecase'
import { HttpApi } from './infrastructure/http/HttpApi'
import { UrlBuilder } from './infrastructure/http/UrlBuilder'
import { MovieRemoteRepository } from './infrastructure/repositories/movies/MovieRemoteRepository'

export class MoviesContainer {
	constructor() {
		this.bindHttpDependencies()
		this.bindMoviesDependencies()
	}

	// This function exists so it looks like a plugin for vue and now can be instancied in main.js
	// eslint-disable-next-line
	install(app: any): void {}

	private bindHttpDependencies() {
		container.bind<IHttpApi>(CONFIG_TYPES.HTTP_API).to(HttpApi).inSingletonScope()
		container.bind<IUrlBuilder>(CONFIG_TYPES.URL_BUILDER).to(UrlBuilder).inSingletonScope()
	}

	private bindMoviesDependencies() {
		container.bind<MovieRepository>(MOVIE_TYPES.MOVIE_REPOSITORY).to(MovieRemoteRepository).inSingletonScope()

		container.bind(MOVIE_TYPES.GET_MOVIES_LIST).to(GetMoviesList).inTransientScope()
	}
}
