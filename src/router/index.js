import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Content from '../page/content'
import Index from '../page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: Index
    }
  ]
})
