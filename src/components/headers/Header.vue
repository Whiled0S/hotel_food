<template>
  <header class="header">
    <div class="header__language">
      <router-link
        tag="button"
        to="/translate"
      >
        {{ language }} <span class="ti-angle-down"></span>
      </router-link>
    </div>

    <ul class="header__items">
      <router-link
        tag="li"
        v-for="{icon, link} in items"
        :to="link"
        class="header__item"
        :key="icon"
      >
        <img :src="icon" alt="icon">
      </router-link>
    </ul>
  </header>
</template>

<script>
  import book from '../../assets/icons/book-light.svg';
  import basket from '../../assets/icons/basket-light.svg';
  import user from '../../assets/icons/user-light.svg';

  export default {
    name: 'Header',
    data () {
      return {
        language: 'Eng',
        items: [
          {
            icon: book,
            link: '/history'
          },
          {
            icon: basket,
            link: '/cart'
          },
          {
            icon: user,
            link: '/profile'
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .header {
    position: sticky;
    top: 0;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    z-index: 10;
    background-color: #fff;

    &__language {
      display: flex;
      align-items: center;

      button {
        font-weight: bold;
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        background-color: transparent;
      }

      .ti-angle-down {
        font-size: 12px;
        font-weight: bold;
      }
    }

    &__items {
      flex-grow: 1;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;
      margin: 0;
      padding: 0;
    }

    &__item {
      height: 22px;
      list-style: none;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }

      img {
        height: 100%;
      }
    }
  }
</style>
