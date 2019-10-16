import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Dish from './pages/Dish';
import History from './pages/History';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: Restaurant
    },
    {
      path: '/dish',
      name: 'dish',
      component: Dish
    },
    {
      path: '/history',
      name: 'history',
      component: History
    }
  ]
});
