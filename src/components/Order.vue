<template>
	<div class="order">
    <h5 class="order__header">Order #001</h5>

    <div class="order__container">
      <OrderItem/>
    </div>

    <div class="order-bill">
      <div class="order-bill__info">
        <p class="order-bill__date">01.02.2019 21:57</p>
        <p class="order-bill__address">Room 404</p>
      </div>
      <div class="order-bill__cost">
        <span>243 AED</span>
      </div>
    </div>
  </div>
</template>

<script>
  import OrderItem from './OrderItem';
  export default {
    name: 'Order',
    components: { OrderItem }
  };
</script>

<style lang="less" scoped>
  .order {
    margin-bottom: 20px;

    &__header {
      margin: 0;
      padding-bottom: 5px;
      border-bottom: 1px solid #d8d8d8;
    }

    &__container {
      padding: 10px 0;
      margin-bottom: 10px;
      border-bottom: 1px solid #d8d8d8;
    }
  }

  .order-bill {
    padding-left: 20px;
    display: flex;
    flex-wrap: nowrap;

    &__info {
      flex-grow: 1;
    }

    &__date,
    &__address {
      margin: 0;
      font-size: 13px;
    }

    &__cost {
      font-size: 13px;
      font-weight: bold;
    }
  }
</style>
