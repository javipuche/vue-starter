export const homeRoute = {
  path: '/',
  component: () => import('@/components/layouts/LayoutBase.vue'),
  children: [
    {
      path: '',
      component: () => import('@/components/views/ViewHome.vue')
    }
  ]
}
