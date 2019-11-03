<template>
  <div class="dish">
    <Header/>

    <Carousel class="dish__carousel" :perPage="1">
      <Slide>
        <img class="dish__slide" :src="img" alt="img">
      </Slide>
      <Slide>
        <img class="dish__slide" :src="img" alt="img">
      </Slide>
      <Slide>
        <img class="dish__slide" :src="img" alt="img">
      </Slide>
    </Carousel>

    <div class="dish__info">
      <div class="dish__main">
        <span class="dish__price">EUR 110</span>
        <span class="dish__parameters">140g, 250 cal</span>
      </div>
      <h3 class="dish__name">Burrata with sticky roasted tomatoes, pine nuts and basil</h3>
      <article class="dish__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </article>

      <div class="dish__buttons">
        <div
          :style="{ width: isAdded ? '130px' : '0', opacity: isAdded ? '1' : '0' }"
          class="dish__buttons-control"
        >
          <button class="dish__buttons-control-minus"></button>
          <span class="dish__buttons-control-amount">1</span>
          <button class="dish__buttons-control-plus"></button>
        </div>
        <div @click="isAdded = !isAdded" class="dish__buttons-add"
             :style="{ width: isAdded ? 'calc(100% - 130px)' : '100%' }">
          <Button>{{ isAdded ? 'Go to cart' : 'Add to cart' }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/headers/Header';
  import { Carousel, Slide } from 'vue-carousel';
  import dish from '../../assets/Salad.jpg';
  import Button from '../../components/Button';

  export default {
    name: 'Dish',
    components: { Button, Header, Carousel, Slide },
    data () {
      return {
        img: dish,
        isAdded: false
      };
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
      margin-bottom: 20px;
      font-size: 13px;
      line-height: 1.3;
    }

    &__buttons {
      display: flex;
      margin-bottom: 20px;
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
