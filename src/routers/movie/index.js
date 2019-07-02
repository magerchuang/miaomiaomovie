export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: 'detail/1/:movieId',
      components: {
        default: () => import('@/components/NowPlaying'),
        detail: () => import('@/views/Movie/detail')
      },
      props: {
        //若是component:则prop:true直接为true即可，而此处是components 有多个router-view 所以对单个使用true 然后解耦
        detail: true
      }
    },
    {
      path: 'detail/2/:movieId',
      components: {
        default: () => import('@/components/ComingSoon'),
        detail: () => import('@/views/Movie/detail')
      },
      props: {
        //若是component:则prop:true直接为true即可，而此处是components 有多个router-view 所以对单个使用true 然后解耦
        detail: true
      }
    },
    {
      path: '/movie',
      redirect: '/movie/nowPlaying'
    }
  ]
}
