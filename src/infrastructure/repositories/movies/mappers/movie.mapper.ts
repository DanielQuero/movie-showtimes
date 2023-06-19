import { MovieListItemModel } from '@/domain/models/movie/movieListItem.model'
import { MovieListItemEntity } from '../entities/movie.entity'

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
				voteAverage: movie.vote_average,
				voteCount: movie.vote_count,
			}
		})
	}
}
