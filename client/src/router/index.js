import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HouseSell from '@/components/House-Sell'
import HouseDetail from '@/components/House-detail'
import HouseEdit from '@/components/My-House-Edit'
import MyHouse from '@/components/My-House'

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
    },
    {
      path: '/detail-house/:id',
      name: 'Detail House',
      component: HouseDetail
    },
    {
      path: '/my-house',
      name: 'My House',
      component: MyHouse
    },
    {
      path: '/edit-house/:id',
      name: 'Edit House',
      component: HouseEdit
    }
  ]
})
