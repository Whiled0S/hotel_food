<template>
  <div class="main-menu">
    <div
      v-if="isMenuOpened"
      @click="closeMenu"
      @wheel.prevent
      @touchmove.prevent
      class="main-menu__fade"
    ></div>

    <transition name="slide">
      <ul v-if="isMenuOpened" class="main-menu__list">
        <router-link
          tag="li"
          :to="`/${locationHash}`"
          class="main-menu__list-item"
          @click.native="closeMenu"
        >
          <img :src="book" alt="icon">
          <span>{{ $t('menu.menu') }}</span>
        </router-link>

        <router-link
          tag="li"
          :to="`/${locationHash}/cart`"
          class="main-menu__list-item"
          @click.native="closeMenu"
        >
          <img :src="basket" alt="icon">
          <span>{{ $t('menu.cart') }}</span>
          <CartAmount class="main-menu__cart-amount" />
        </router-link>

        <router-link
          tag="li"
          :to="`/${locationHash}/history`"
          class="main-menu__list-item"
          @click.native="closeMenu"
        >
          <img :src="user" alt="icon">
          <span>{{ $t('menu.history') }}</span>
        </router-link>

        <router-link
          tag="li"
          :to="`/${locationHash}/terms`"
          class="main-menu__list-item"
          @click.native="closeMenu"
        >
          <span>{{ $t('menu.terms') }}</span>
        </router-link>
      </ul>
    </transition>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  import book from '../assets/icons/book-light.svg';
  import basket from '../assets/icons/basket-light.svg';
  import user from '../assets/icons/user-light-thin.svg';
  import CartAmount from "./CartAmount";

  export default {
    name: 'MainMenu',
    components: {CartAmount},
    data() {
      return {
        book,
        basket,
        user
      };
    },
    computed: {
      ...mapState(['isMenuOpened', 'locationHash']),
    },
    methods: {
      ...mapActions(['closeMenu'])
    }
  };
</script>

<style lang="less" scoped>
  .main-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 100;

    &__fade {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .7);
    }

    &__list {
      position: relative;
      width: 240px;
      height: 100%;
      padding: 0 16px;
      margin: 0;
      background-color: #fff;
    }

    &__list-item {
      display: flex;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid #d8d8d8;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }

    &__cart-amount {
      margin-left: 10px;
    }
  }
</style>
