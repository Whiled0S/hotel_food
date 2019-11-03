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

    <div class="header__items">
      <button @click="openMenu" class="header__menu-button ti-menu"></button>
    </div>
  </header>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Header',
    data () {
      return {
        language: 'Eng'
      };
    },
    methods: {
      ...mapActions(['openMenu'])
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

    &__menu-button {
      padding: 5px;
      margin: 0 -5px 0;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
</style>
