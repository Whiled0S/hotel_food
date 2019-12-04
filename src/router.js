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

import store from './store';

Vue.use(Router);

const router = new Router({
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
      path: '/:location/dish/:id',
      name: 'dish',
      component: Dish
    },
    {
      path: '/:location/history',
      name: 'history',
      component: History
    },
    {
      path: '/:location/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/:location/translate',
      name: 'translate',
      component: Translate
    },
    {
      path: '/:location/receipt',
      name: 'receipt',
      component: Receipt
    },
    {
      path: '/:location/cart',
      name: 'cart',
      component: Cart,
      beforeEnter(to, from, next) {
        if (from.name) {
          store.dispatch('cart/resetCart').then(() => {
            store.dispatch('cart/getCart');
          });
        }
        next();
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.commit('SET_LOCATION_HASH', to.params.location);

  next();
});

export default router;
