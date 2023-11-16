import { Component, Vue, Prop, Ref, Watch } from 'vue-facing-decorator'

@Component
export default class StarRating extends Vue {
	@Prop() rating!: number
	@Ref('ratingElement') ratingElement!: HTMLElement

	mounted() {
		this.setStarsWidth()
	}

	setStarsWidth() {
		this.ratingElement.style.setProperty('--rating-width-percentage', this.ratingPercentage)
	}

	get ratingPercentage(): string {
		return `${Math.round(this.rating * 10)}%`
	}

	@Watch('rating')
	onChangedRating() {
		this.setStarsWidth()
	}
}
