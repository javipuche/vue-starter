export const aboutRoute = {
  path: '/about',
  component: () => import('@/components/layouts/LayoutBase.vue'),
  children: [
    {
      path: '',
      component: () => import('@/components/views/ViewAbout.vue')
    }
  ]
}
