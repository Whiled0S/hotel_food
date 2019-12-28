<template>
  <div class="order">
    <h5 class="order__header">{{ $t('history.orderHeader') }} #{{ number }}</h5>

    <slot/>

    <div class="order-bill">
      <div class="order-bill__info">
        <p class="order-bill__date">{{ date | date }}</p>
        <p class="order-bill__address">{{ address }}</p>
      </div>
      <div class="order-bill__cost">
        <span>{{ cost | price }} {{ currency | upper }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {date, price, upper} from "../../../helpers/common";

  export default {
    name: 'Order',
    props: {
      number: Number,
      date: String,
      address: String,
      cost: Number,
      currency: String
    },
    filters: {
      date,
      price,
      upper
    }
  };
</script>

<style lang="less" scoped>
  .order {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

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
