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
    padding: 10px 0;
    margin-top: 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #d8d8d8;
    list-style: none;
  }
</style>
