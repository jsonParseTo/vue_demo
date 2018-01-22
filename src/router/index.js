import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HelloWorld from '@/views/HelloWorld'
import Video from '@/views/Video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/helloworld',
      component: HelloWorld
    },
    {
      path: '/video',
      component: Video
    }
  ]
})
