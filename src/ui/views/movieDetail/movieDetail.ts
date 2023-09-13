import { Component, Vue } from 'vue-facing-decorator'
import { inject } from 'inversify-props'
import { MOVIE_TYPES } from '@/application/types/MovieTypes'
import { MovieModel } from '@/domain/models/movie/movie.model'
import { GetMovieDetail } from '@/domain/usecases/getMovieDetail.usecase'
import { useRoute, useRouter } from 'vue-router'
import StarRating from '@/ui/components/starRating/starRating.vue'

@Component({
	components: {
		StarRating,
	},
})
export default class MovieDetailView extends Vue {
	@inject(MOVIE_TYPES.GET_MOVIE_DETAIL) private readonly getMovieDetail!: GetMovieDetail

	loading = true
	router = useRouter()
	route = useRoute()
	movieInfo?: MovieModel

	get backgroundStyle() {
		return {
			backgroundImage: `url(${this.movieInfo?.backdropImgUrl})`,
		}
	}

	async created() {
		await this.router.isReady()

		this.getMovieInfo(`${this.route.params.id}`)
	}

	async getMovieInfo(movieId: string) {
		this.movieInfo = await this.getMovieDetail.execute(`${movieId}`)

		this.loading = false
	}
}
