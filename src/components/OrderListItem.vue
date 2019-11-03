<template>
  <li class="order-item">
    <span class="order-item__number">{{ number }}.</span>

    <div class="order-item__info">
      <div class="order-item__left">
        <p class="order-item__name">{{ name }}</p>
        <span class="order-item__parameters">{{ parameters | commaSeparated }}</span>
      </div>
      <div class="order-item__right">
        <p class="order-item__price">{{ price }} x {{ amount }} AED</p>
      </div>
    </div>
  </li>
</template>

<script>
  import { commaSeparated } from '../helpers/common';

  export default {
    name: 'OrderListItem',
    props: {
      name: String,
      parameters: Array,
      price: Number,
      amount: Number,
      number: Number
    },
    filters: {
      commaSeparated
    }
  };
</script>

<style lang="less" scoped>
  .order-item {
    position: relative;
    padding-left: 20px;
    margin-bottom: 15px;
    font-size: 14px;

    &:last-child {
      margin-bottom: 0;
    }

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
      text-align: right;
    }
  }
</style>
