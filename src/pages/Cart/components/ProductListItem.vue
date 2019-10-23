<template>
  <div class="product-list-item">
    <div class="product-list-item__image">
      <img :src="img" alt="dish">
    </div>
    <div class="product-list-item__info">
      <h4 class="product-list-item__name">{{ name }}</h4>
      <p class="product-list-item__parameters">{{ parameters | commaSeparated }}</p>

      <div class="product-list-item__amount">
        <button class="button">
          <span class="button__horizontal"></span>
        </button>
        <span class="amount">{{ amount }}</span>
        <button class="button">
          <span class="button__horizontal"></span>
          <span class="button__horizontal button__horizontal_rotated"></span>
        </button>
      </div>
    </div>
    <div class="product-list-item__last">
      <span class="product-list-item__cost">{{ cost }} AED</span>
      <button class="product-list-item__remove ti-trash"></button>
    </div>
  </div>
</template>

<script>
  import {commaSeparated} from '../../../helpers/common';

  export default {
    name: 'ProductListItem',
    props: {
      img: String,
      name: String,
      parameters: Array,
      amount: Number,
      price: Number
    },
    filters: {
      commaSeparated
    },
    computed: {
      cost() {
        return this.amount * this.price;
      }
    }
  };
</script>

<style lang="less" scoped>
  .product-list-item {
    margin-bottom: 25px;
    padding-top: 10px;
    display: flex;
    flex-wrap: nowrap;
    border-top: 1px solid #d8d8d8;

    &:last-child {
      margin-bottom: 0;
    }

    &__image {
      position: relative;
      flex-basis: 84px;
      min-width: 84px;
      height: 82px;
      margin-right: 25px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      flex-grow: 1;
      margin-right: 13px;
    }

    &__last {
      position: relative;
    }

    &__name {
      font-size: 13px;
      margin-bottom: 3px;
      margin-top: 0;
      font-weight: normal;
    }

    &__parameters {
      margin: 0 0 20px;
      font-size: 10px;
    }

    &__amount {
      display: flex;
      flex-wrap: nowrap;
      font-size: 13px;
      align-items: center;

      .amount {
        padding: 0 7px;
      }
    }

    &__cost {
      display: block;
      font-size: 13px;
      line-height: normal;
      white-space: nowrap;
    }

    &__remove {
      color: #d8d8d8;
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
      font-weight: bold;
    }
  }

  .button {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #d8d8d8;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    outline: none;
    background-color: transparent;
    color: #d8d8d8;

    &__horizontal {
      position: absolute;
      width: 10px;
      height: 2px;
      background-color: #d8d8d8;
      border-radius: 1px;

      &_rotated {
        transform: rotateZ(90deg);
      }
    }
  }
</style>
