import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import CarReviewList from '@/views/CarReview/List'
import CarReviewDetail from '@/views/CarReview/Detail'
import HelloWorld from '@/views/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/CarReview',
      name: 'CarReviewList',
      component: CarReviewList
    },
    {
      path: '/CarReviewDetail',
      name: 'CarReviewDetail',
      component: CarReviewDetail
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
