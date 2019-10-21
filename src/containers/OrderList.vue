<template>
	<ul class="order-list">
    <OrderListItem
      v-for="({ name, parameters, price, amount }, index) in items"
      :key="index"
      :name="name"
      :parameters="parameters"
      :price="price"
      :amount="amount"
      :number="index + 1"
    />
  </ul>
</template>

<script>
  import OrderListItem from '../components/OrderListItem';
  export default {
    name: 'OrderList',
    components: { OrderListItem },
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
