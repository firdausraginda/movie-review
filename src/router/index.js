import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import Nowplaying from '@/components/Nowplaying'
import Toprated from '@/components/Toprated'
import Popular from '@/components/Popular'
import Upcoming from '@/components/Upcoming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail/:linkprev/:linkhal',
      name: 'detail',
      component: Detail
    },
    {
      path: '/nowplaying/:linkprev/:id',
      name: 'nowplaying',
      component: Nowplaying
    },
    {
      path: '/toprated/:linkprev/:id',
      name: 'toprated',
      component: Toprated
    },
    {
      path: '/popular/:linkprev/:id',
      name: 'popular',
      component: Popular
    },
    {
      path: '/upcoming/:linkprev/:id',
      name: 'upcoming',
      component: Upcoming
    }
  ]
})
