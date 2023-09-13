import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/movie/:id',
			name: 'movieDetail',
			component: () => import('../views/movieDetail/movieDetail.vue'),
		},
	],
})

export default router
