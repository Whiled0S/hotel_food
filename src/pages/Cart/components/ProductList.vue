<template>
  <div class="product-list">
    <ProductListItem
      v-for="{id, img, name, parameters, amount, price} in items"
      :key="id"
      :img="img"
      :name="name"
      :parameters="parameters"
      :amount="amount"
      :price="price"
    />
  </div>
</template>

<script>
  import ProductListItem from './ProductListItem';
  export default {
    name: 'ProductList',
    components: { ProductListItem },
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
