<template>
  <header class="header">
    <!--    <div class="header__language">-->
    <!--      <router-link-->
    <!--        tag="button"-->
    <!--        :to="`/${locationHash}/translate`"-->
    <!--      >-->
    <!--        {{ language }} <span class="ti-angle-down"/>-->
    <!--      </router-link>-->
    <!--    </div>-->

    <div class="header__items">
      <CartAmount class="header__cart-amount"/>
      <OpenMenuButton/>
    </div>
  </header>
</template>

<script>
  import {mapState} from 'vuex';
  import CartAmount from "../CartAmount";
  import OpenMenuButton from "../OpenMenuButton";

  export default {
    name: 'Header',
    components: {OpenMenuButton, CartAmount},
    data() {
      return {
        language: 'Eng'
      };
    },
    computed: {
      ...mapState(['locationHash'])
    }
  };
</script>

<style lang="less" scoped>
  .header {
    position: sticky;
    top: 0;
    height: 50px;
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

    &__cart-amount {
      margin-right: 10px;
    }
  }
</style>
