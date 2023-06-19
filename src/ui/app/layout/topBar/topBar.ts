import { Component, Vue } from 'vue-facing-decorator'
import { RouterLink } from 'vue-router'

@Component({
	components: {
		RouterLink,
	},
})
export default class TopBar extends Vue {}
