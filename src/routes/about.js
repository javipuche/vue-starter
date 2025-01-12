export const aboutRoute = {
  path: '/about',
  component: () => import('@/layouts/Base.vue'),
  children: [
    {
      path: '',
      component: () => import('@/views/AboutView.vue')
    }
  ]
}
