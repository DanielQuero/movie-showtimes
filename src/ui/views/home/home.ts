import { Component, Vue } from 'vue-facing-decorator'
import { inject } from 'inversify-props'
import { MOVIE_TYPES } from '@/application/types/MovieTypes'
import { MovieListItemModel } from '@/domain/models/movie/movieListItem.model'
import { GetMoviesList } from '@/domain/usecases/getMoviesList.usecase'
import MovieCard from './components/movieCard/movieCard.vue'

@Component({
	components: {
		MovieCard,
	},
})
export default class HomeView extends Vue {
	@inject(MOVIE_TYPES.GET_MOVIES_LIST) private readonly getMoviesList!: GetMoviesList

	moviesList: MovieListItemModel[] = []

	created() {
		this.getSuscriptionPlanList()
	}

	async getSuscriptionPlanList() {
		this.moviesList = await this.getMoviesList.execute()
	}
}
