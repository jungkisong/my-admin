import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/views/Tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tab',
      name: 'Tab',
      component: Tab
    }
  ]
})
