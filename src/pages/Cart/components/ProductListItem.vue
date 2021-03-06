<template>
  <div class="product-list-item">
    <div class="product-list-item__image">
      <img :src="img" alt="dish">
    </div>

    <div class="product-list-item__data">
      <div class="product-list-item__info">
        <div class="product-list-item__col-1">
          <h4 class="product-list-item__name">{{ name }}</h4>
          <p class="product-list-item__parameters">{{ weight }} g, {{ calories }} cal</p>
        </div>
        <div class="product-list-item__col-2">
          <span class="product-list-item__cost">{{ cost }} {{ currency | upper }}</span>
        </div>
      </div>

      <div class="product-list-item__buttons">
        <div class="product-list-item__col-1">
          <div class="product-list-item__amount">
            <button class="button" @click="this.removeFromCart">
              <span class="button__horizontal"/>
            </button>

            <span class="amount">{{ amount }}</span>

            <button class="button" @click="this.addToCart">
              <span class="button__horizontal"/>
              <span class="button__horizontal button__horizontal_rotated"/>
            </button>
          </div>
        </div>
        <div class="product-list-item__col-2">
          <button class="product-list-item__remove ti-trash" @click="deleteFromCart({productId: id})"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex';
  import {upper} from '../../../helpers/common';
  import debounce from "lodash/debounce";

  export default {
    name: 'ProductListItem',
    props: {
      id: Number,
      img: String,
      name: String,
      amount: Number,
      price: Number,
      calories: Number,
      weight: Number,
      currency: String
    },
    filters: {
      upper
    },
    computed: {
      cost() {
        return this.amount * this.price;
      }
    },
    methods: {
      ...mapMutations('cart', ['REMOVE_PRODUCT', 'ADD_PRODUCT']),
      ...mapActions('cart', ['addIntoCart', 'deleteFromCart']),

      sendAddIntoCartRequest: debounce(function () {
        this.addIntoCart({productId: this.id, amount: this.amount});
      }, 300),

      addToCart() {
        this.ADD_PRODUCT({id: this.id});
        this.sendAddIntoCartRequest();
      },

      removeFromCart() {
        if (this.amount === 1) return;

        this.REMOVE_PRODUCT(this.id);
        this.sendAddIntoCartRequest();
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

    &__data {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    &__info,
    &__buttons {
      display: flex;
      flex-wrap: nowrap;
    }

    &__buttons {
      align-items: center;
    }

    &__col-1 {
      margin-right: 13px;
      flex-grow: 1;
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
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
      font-weight: bold;
      font-size: 20px;
    }
  }

  .amount {
    min-width: 30px;
    text-align: center;
  }

  .button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    background-color: #f0f0f0;

    &__horizontal {
      position: absolute;
      width: 13px;
      height: 1px;
      background-color: #979797;
      border-radius: 1px;

      &_rotated {
        transform: rotateZ(90deg);
      }
    }
  }
</style>
