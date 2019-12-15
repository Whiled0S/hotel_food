<template>
  <ul class="order-list">
    <OrderListItem
      v-for="({
        name,
        calories,
        weight,
        precisionPrice,
        quantity,
        currency: { name: cName }
      }, index) in items"
      :key="index"
      :name="name"
      :calories="calories"
      :weight="weight"
      :price="precisionPrice"
      :amount="quantity"
      :currency="cName"
      :number="index + 1"
    />
  </ul>
</template>

<script>
  import OrderListItem from '../components/OrderListItem';

  export default {
    name: 'OrderList',
    components: {OrderListItem},
    props: {
      items: Array
    }
  };
</script>

<style scoped>
  .order-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
