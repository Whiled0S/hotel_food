<template>
  <div class="product-list">
    <ProductListItem
      v-for="{id, image: {src}, name, quantityInCart, precisionPrice, calories, weight} in items"
      :key="id"
      :img="src"
      :name="name"
      :calories="calories"
      :weight="weight"
      :amount="quantityInCart"
      :price="precisionPrice / 100"
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
