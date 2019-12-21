<template>
  <div v-if="location && order && products" class="receipt">
    <HeaderClose
      :text="`Order Receipt #${order.id}`"
      @close="goHome"
    />

    <div class="container">
      <div class="receipt__list-container">
        <OrderList
          :items="products"
        />
      </div>

      <div class="receipt__total">
        <span class="receipt__total-text">Total:</span>
        <span class="receipt__total-text">{{ order.currency.name | upper }} {{ order.totalPrecisionAmount | price }}</span>
      </div>

      <ReceiptInfo
        :point="location.name"
        :method="method"
        :date="order.createdAt.date"
        :code="code"
      />

      <ReceiptComment
        v-if="order.comment"
        :comment="order.comment"
      />
    </div>
  </div>
  <div v-else-if="error" class="receipt__error">
    <div class="container">
      <h2>An error occurred.<br>Please, try again later.</h2>
    </div>
  </div>
  <PageLoader v-else />
</template>

<script>
  import {mapState} from 'vuex';

  import { price, upper } from '../../helpers/common';

  import HeaderClose from '../../components/headers/HeaderClose';
  import OrderList from '../../containers/OrderList';
  import ReceiptInfo from './components/ReceiptInfo';
  import ReceiptComment from './components/ReceiptComment';
  import PageLoader from "../../components/PageLoader";

  export default {
    name: 'Receipt',
    components: {PageLoader, ReceiptComment, ReceiptInfo, OrderList, HeaderClose},
    data() {
      return {
        method: 'Card',
        date: 'December, 12 09:20',
        code: 1234
      };
    },
    computed: {
      ...mapState('receipt', ['location', 'order', 'products', 'error'])
    },
    methods: {
      goHome() {
        window.location.href = `/${this.location.hash}`;
      }
    },
    filters: {
      price,
      upper
    }
  };
</script>

<style lang="less" scoped>
  .receipt {

    &__list-container {
      padding-bottom: 20px;
      margin-bottom: 30px;
      border-bottom: 4px solid #d8d8d8;
    }

    &__total {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    &__total-text {
      font-size: 18px;
      font-weight: bold;
    }

    &__button-container {
      padding-bottom: 20px;
    }

    &__error {
      text-align: center;
    }
  }
</style>
