<template>
  <div class="order">
    <h5 class="order__header">Order #{{ number }}</h5>

    <div class="order__container">
      <OrderItem
        v-for="({ name, parameters, price, amount }, index) in items"
        :key="index"
        :name="name"
        :parameters="parameters"
        :price="price"
        :amount="amount"
        :number="index + 1"
      />
    </div>

    <div class="order-bill">
      <div class="order-bill__info">
        <p class="order-bill__date">{{ date }}</p>
        <p class="order-bill__address">{{ address }}</p>
      </div>
      <div class="order-bill__cost">
        <span>{{ cost }} AED</span>
      </div>
    </div>
  </div>
</template>

<script>
  import OrderItem from './OrderItem';

  export default {
    name: 'Order',
    components: { OrderItem },
    props: {
      number: String,
      date: String,
      address: String,
      cost: Number,
      items: Array
    }
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
