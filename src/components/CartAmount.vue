<template>
  <span v-if="itemsSet && totalQuantity > 0" class="cart-amount">{{ totalQuantity }}</span>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "CartAmount",
    computed: {
      ...mapGetters('cart', ['itemsSet', 'totalQuantity'])
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
