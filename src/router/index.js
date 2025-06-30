import { createRouter, createWebHistory } from 'vue-router'
import { homeRoute } from './routes/home'
import { aboutRoute } from './routes/about'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [homeRoute, aboutRoute]
})
