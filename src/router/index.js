import Vue from 'vue'
import Router from 'vue-router'

import '@/assets/css/reset.css'
import '@/assets/css/header.css'

import Shop from '@/views/shop'
import Item from '@/views/item'
import Car from '@/views/car'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    }
  ]
})
