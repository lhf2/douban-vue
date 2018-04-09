import Vue from 'vue'
import Router from 'vue-router'
import TopMovie from '@/components/TopMovie.vue'
import UsaMovie from '@/components/UsaMovie.vue'
import Search from '@/components/Search.vue'
import MovieDetail from '../common/MovieDetail.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/top"
    },{
      path: '/top',
      name: 'TopMovie',
      component: TopMovie
    },{
      path: '/usa',
      name: 'UsaMovie',
      component: UsaMovie
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/movie-detail/:id',
      name: 'movie-detail',
      component: MovieDetail
    }
  ]
})
