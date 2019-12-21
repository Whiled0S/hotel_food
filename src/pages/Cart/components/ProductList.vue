<template>
  <div class="product-list">
    <ProductListItem
      v-for="{id, image: {src}, name, quantityInCart, precisionPrice, calories, weight, currency} in items"
      :key="id"
      :id="id"
      :img="src"
      :name="name"
      :calories="calories"
      :weight="weight"
      :amount="quantityInCart"
      :price="precisionPrice / 100"
      :currency="currency.name"
    />
  </div>
</template>

<script>
  import ProductListItem from './ProductListItem';

  export default {
    name: 'ProductList',
    components: {ProductListItem},
    props: {
      items: Array
    }
  };
</script>

<style scoped>
  .product-list {
    padding-bottom: 20px;
    margin-bottom: 10px;
    border-bottom: 2px solid #d8d8d8;
  }
</style>
