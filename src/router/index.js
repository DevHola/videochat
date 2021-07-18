import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Video from '@/components/Video'
import bizconn from '@/components/bizconn'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/videochat/:id',
      name: 'Video',
      component: Video
    },
    {
      path: '/businessconnection/:id',
      name: 'bizconn',
      component: bizconn
    }
  ]
})
