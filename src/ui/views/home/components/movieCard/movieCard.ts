import { MovieListItemModel } from '@/domain/models/movie/movieListItem.model'
import { Component, Vue, Prop } from 'vue-facing-decorator'
import StarRating from '@/ui/components/starRating/starRating.vue'

@Component({
	components: {
		StarRating,
	},
})
export default class MovieCard extends Vue {
	@Prop() movieInfo!: MovieListItemModel
}
