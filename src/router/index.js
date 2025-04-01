import { createMemoryHistory, createRouter } from 'vue-router'

import MoviesView from '@/views/Movies/index.vue'
import MovieDetailsView from '@/views/Movies/details/index.vue'

const routes = [
  { path: '/movies', component: MoviesView },
  { path: '/movies/:id', component: MovieDetailsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
