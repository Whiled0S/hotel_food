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
          v-for="{ icon, title, link } in items"
          :key="title"
          tag="li"
          :to="link"
          class="main-menu__list-item"
          @click.native="closeMenu"
        ><img v-if="icon" :src="icon" alt="icon"> {{ title }}</router-link>
      </ul>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import book from '../assets/icons/book-light.svg';
  import basket from '../assets/icons/basket-light.svg';
  import user from '../assets/icons/user-light-thin.svg';

  export default {
    name: 'MainMenu',
    data () {
      return {
        items: [
          {
            icon: book,
            title: 'Menu',
            link: '/'
          },
          {
            icon: basket,
            title: 'Cart',
            link: '/cart'
          },
          {
            icon: user,
            title: 'History',
            link: '/history'
          },
          {
            title: 'Terms of use',
            link: '/terms'
          }
        ]
      };
    },
    computed: {
      ...mapState(['isMenuOpened'])
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
      padding: 10px 0;
      border-bottom: 1px solid #d8d8d8;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
</style>
