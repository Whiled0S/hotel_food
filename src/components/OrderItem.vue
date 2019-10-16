<template>
  <div class="order-item">
    <span class="order-item__number">1.</span>

    <div class="order-item__info">
      <div class="order-item__left">
        <p class="order-item__name">Buffalo burrata with cherry tomatoes and pesto</p>
        <span class="order-item__parameters">140g, 250 cal</span>
      </div>
      <div class="order-item__right">
        <p class="order-item__price">4 x 35 AED</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OrderItem'
  };
</script>

<style lang="less" scoped>
  .order-item {
    position: relative;
    padding-left: 20px;
    font-size: 13px;

    &__number {
      position: absolute;
      top: 0;
      left: 0;
    }

    &__info {
      display: flex;
      flex-wrap: nowrap;
    }

    &__left,
    &__right {
      flex-grow: 1;
    }

    &__name {
      line-height: 1;
      margin: 0 0 4px;
      padding-right: 10px;
    }

    &__parameters {
      margin: 0;
      font-size: 10px;
    }

    &__price {
      margin: 0;
      white-space: nowrap;
    }
  }
</style>
