export const homeRoute = {
  path: '/',
  component: () => import('@/layouts/Base.vue'),
  children: [
    {
      path: '',
      component: () => import('@/views/HomeView.vue')
    }
  ]
}
