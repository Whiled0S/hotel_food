import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';
import Dish from './pages/Dish/Dish';
import History from './pages/History/History';
import Terms from './pages/Terms/Terms';
import Translate from './pages/Translation/Translate';
import Receipt from './pages/Receipt/Receipt';
import Cart from './pages/Cart/Cart';
import Default from "./pages/Default/Default";

import store from './store';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'default',
    component: Default
  },
  {
    path: '/thank-you/:id',
    name: 'thank-you',
    component: Receipt,
    beforeEnter(to, from, next) {
      store.dispatch('receipt/getOrder', {orderId: to.params.id});
      next();
    }
  },
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
    component: History,
    beforeEnter(to, from, next) {
      store.dispatch('history/getOrders');
      next();
    }
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
];

routes.forEach((route) => {
  route.metha = {
    title: 'QUAR'
  };
});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'thank-you') {
    store.commit('SET_LOCATION_HASH', to.params.location);
  }

  const prevUrl = from.name ? from.fullPath : from.fullPath + to.params.location;

  store.commit('SET_PREVIOUS_URL', prevUrl);

  next();
});

export default router;
