<template>
  <div class="cart">
    <HeaderBack text="Cart">
      <button class="cart__clear">Clear all</button>
    </HeaderBack>

    <div class="container">
      <ProductList :items="items"/>
    </div>
  </div>
</template>

<script>
  import HeaderBack from '../../components/headers/HeaderBack';
  import ProductList from './components/ProductList';

  import img from '../../assets/Dish.png';

  export default {
    name: 'Cart',
    components: { ProductList, HeaderBack },
    data() {
      return {
        items: [
          {
            id: 1,
            img: img,
            name: 'Tomato Mozarella Salad',
            parameters: ['140g', '250 cal'],
            amount: 1,
            price: 220
          },
          {
            id: 2,
            img: img,
            name: 'Tomato Mozarella Salad',
            parameters: ['140g', '250 cal'],
            amount: 3,
            price: 120
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .cart {

    &__clear {
      position: absolute;
      height: 16px;
      right: 16px;
      padding: 0;
      margin: 0;
      font-size: 9px;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
</style>
