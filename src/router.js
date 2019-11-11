import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';
import Dish from './pages/DIsh/Dish';
import History from './pages/History/History';
import Terms from './pages/Terms/Terms';
import Translate from './pages/Translation/Translate';
import Receipt from './pages/Receipt/Receipt';
import Cart from './pages/Cart/Cart';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:location',
      name: 'home',
      component: Home
    },
    {
      path: '/:location/restaurant/:id',
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
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/translate',
      name: 'translate',
      component: Translate
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: Receipt
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
});
