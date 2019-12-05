<template>
  <span v-if="itemsSet && items.length > 0" class="cart-amount">{{ items.length }}</span>
</template>

<script>
  import {mapGetters, mapState} from "vuex";

  export default {
    name: "CartAmount",
    computed: {
      ...mapState('cart', ['items']),
      ...mapGetters('cart', ['itemsSet'])
    }
  };
</script>

<style lang="less" scoped>
  .cart-amount {
    min-width: 26px;
    min-height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #e74c3c;
    border-radius: 13px;
    padding: 5px 8px;
    box-sizing: border-box;
    font-size: 12px;
  }
</style>
