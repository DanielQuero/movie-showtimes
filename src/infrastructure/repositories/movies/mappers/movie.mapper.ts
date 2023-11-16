import { MovieModel, MovieCrewModel } from '@/domain/models/movie/movie.model'
import { MovieListItemModel } from '@/domain/models/movie/movieListItem.model'
import {
	MovieCastEntity,
	MovieCrewEntity,
	MovieDetailCreditsResponse,
	MovieDetailInfoResponse,
} from '../entities/movie.entity'
import { MovieListItemEntity } from '../entities/movieList.entity'

export class MovieRepositoryMapper {
	movieListItemEntityToModel(moviesList: MovieListItemEntity[]): MovieListItemModel[] {
		// NOTE: the image widths availables can be found here: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400
		const imageWidth = '/w342'

		return moviesList.map((movie) => {
			return {
				id: movie.id,
				title: movie.title,
				releaseDate: new Date(movie.release_date),
				overview: movie.overview,
				posterImgUrl: `${import.meta.env.VITE_APP_MOVIE_IMAGE_URL}/${imageWidth}/${movie.poster_path}`,
				voteAverage: parseFloat(movie.vote_average.toFixed(2)),
				voteCount: movie.vote_count,
			}
		})
	}

	movieEntityToModel(
		movieListInfo: MovieDetailInfoResponse,
		movieDetailCreditsInfo: MovieDetailCreditsResponse,
	): MovieModel {
		// NOTE: the image widths availables can be found here: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400
		const posterImageWidth = '/w342'
		const backdropImageWidth = '/original'

		return {
			id: movieListInfo.id,
			title: movieListInfo.title,
			tagline: movieListInfo.tagline,
			overview: movieListInfo.overview,
			backdropImgUrl: `${import.meta.env.VITE_APP_MOVIE_IMAGE_URL}/${backdropImageWidth}/${
				movieListInfo.backdrop_path
			}`,
			posterImgUrl: `${import.meta.env.VITE_APP_MOVIE_IMAGE_URL}/${posterImageWidth}/${movieListInfo.poster_path}`,
			voteAverage: parseFloat(movieListInfo.vote_average.toFixed(2)),
			voteCount: movieListInfo.vote_count,
			releaseDate: new Date(movieListInfo.release_date),
			status: movieListInfo.status,
			imdbId: movieListInfo.imdb_id,
			runtime: movieListInfo.runtime,
			genres: movieListInfo.genres,
			directors: this.findCrewMemberByJob(movieDetailCreditsInfo.crew, ['Director']),
		}
	}

	private findCrewMemberByJob(movieCast: MovieCrewEntity[], jobs: string[]): MovieCrewModel[] {
		return movieCast
			.reduce((filtered: MovieCrewModel[], castMember) => {
				if (jobs.includes(castMember.job)) {
					const castMemberModel: MovieCrewModel = {
						id: castMember.id,
						name: castMember.name,
						job: castMember.job,
					}
					filtered.push(castMemberModel)
				}

				return filtered
			}, [])
			.sort((a, b) => (a.job > b.job ? 1 : -1))
	}
}
