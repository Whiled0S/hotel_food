<template>
	<div class="order-history">
    <CloseHeader/>

    <div class="container">
      <Order/>
    </div>
  </div>
</template>

<script>
  import CloseHeader from '../components/CloseHeader';
  import Order from '../components/Order';
  export default {
    name: 'OrderHistory',
    components: { Order, CloseHeader }
  };
</script>

<style scoped>

</style>
