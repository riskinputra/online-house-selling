import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HouseSell from '@/components/House-Sell'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sell-house',
      name: 'Sell House',
      component: HouseSell
    }
  ]
})
