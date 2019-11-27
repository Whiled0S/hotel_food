<template>
  <div v-if="!loading" class="dish">
    <Header/>

    <div class="dish__content">
      <Carousel class="dish__carousel" :perPage="1">
        <Slide
          v-for="{id, src} in product.images"
          :key="id"
        >
          <img class="dish__slide" :src="src" alt="img">
        </Slide>
      </Carousel>

      <div class="dish__info">
        <div class="dish__main">
          <span class="dish__price">{{ product.currency.name | upper }} {{ product.precisionPrice | price }}</span>
          <span class="dish__parameters">{{ product.weight }}g, {{product.calories}} cal</span>
        </div>
        <h3 class="dish__name">{{ product.name }}</h3>
        <article class="dish__description">{{ product.description }}</article>
      </div>
    </div>

    <div class="container dish__buttons">
      <div
        :style="{ width: productQuantity > 0 ? '130px' : '0', opacity: productQuantity > 0 ? '1' : '0' }"
        class="dish__buttons-control"
      >
        <button class="dish__buttons-control-minus"/>
        <span class="dish__buttons-control-amount">{{ productQuantity }}</span>
        <button class="dish__buttons-control-plus"/>
      </div>
      <div @click="addIntoCart({ productId })" class="dish__buttons-add"
           :style="{ width: productQuantity > 0 ? 'calc(100% - 130px)' : '100%' }">
        <Button>{{ isAdded ? 'Go to cart' : 'Add to cart' }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapActions, mapState, mapGetters} from 'vuex';

  import Header from '../../components/headers/Header';
  import {Carousel, Slide} from 'vue-carousel';
  import dish from '../../assets/Salad.jpg';
  import Button from '../../components/Button';
  import {upper, price} from "../../helpers/common";

  export default {
    name: 'Dish',
    components: {Button, Header, Carousel, Slide},
    data() {
      return {
        img: dish,
        isAdded: false
      };
    },
    async created() {
      this.SET_LOADING(true);

      await this.getProduct({productId: this.productId});

      this.SET_LOADING(false);
    },
    filters: {
      upper,
      price
    },
    computed: {
      ...mapState('dish', ['product', 'loading']),
      ...mapGetters('cart', ['getProductQuantity']),

      productId() {
        return this.$route.params.id;
      },

      productQuantity() {
        return this.getProductQuantity(this.$route.params.id);
      }
    },
    methods: {
      ...mapMutations('dish', ['SET_LOADING']),
      ...mapActions('dish', ['getProduct']),
      ...mapActions('cart', ['addIntoCart'])
    }
  };
</script>

<style lang="less" scoped>
  .dish {
    display: flex;
    flex-direction: column;

    &__carousel {
      margin-bottom: 20px;
    }

    &__content {
      flex-grow: 1;
    }

    &__slide {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__info {
      padding: 0 16px;
      color: #2b2423;
    }

    &__price {
      font-size: 18px;
      font-weight: bold;
    }

    &__parameters {
      font-size: 15px;
    }

    &__main {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &__name {
      margin-bottom: 10px;
      margin-top: 0;
      font-size: 18px;
      line-height: 1.39;
    }

    &__description {
      font-size: 13px;
      line-height: 1.3;
    }

    &__buttons {
      display: flex;
      padding-top: 20px;
      padding-bottom: 20px;
      position: sticky;
      bottom: 0;
      background-color: #fff;
    }

    &__buttons-control {
      display: grid;
      grid-template-columns: repeat(3, 40px);
      grid-template-rows: 40px;
      transition: width .3s, opacity .3s;
      overflow: hidden;

      button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #f0f0f0;

        &::before {
          position: absolute;
          content: '';
          width: 13px;
          height: 1px;
          background-color: #979797;
        }
      }
    }

    &__buttons-control-plus {

      &::after {
        position: absolute;
        content: '';
        height: 13px;
        width: 1px;
        background-color: #979797;
      }
    }

    &__buttons-control-amount {
      text-align: center;
      line-height: 40px;
      font-size: 12.7px;
      color: #333333;
    }

    &__buttons-add {
      width: 100%;
      transition: width .3s;
    }
  }
</style>
