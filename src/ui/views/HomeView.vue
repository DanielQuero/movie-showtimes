<template>
	<main>
		<TheWelcome />
	</main>
</template>

<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
	components: {
		TheWelcome,
	},
})
export default class HomeView extends Vue {}
</script>
