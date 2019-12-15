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
        :date="date"
        :code="code"
      />

      <ReceiptComment
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import { price, upper } from '../../helpers/common';

  import HeaderClose from '../../components/headers/HeaderClose';
  import OrderList from '../../containers/OrderList';
  import ReceiptInfo from './components/ReceiptInfo';
  import ReceiptComment from './components/ReceiptComment';

  export default {
    name: 'Receipt',
    components: {ReceiptComment, ReceiptInfo, OrderList, HeaderClose},
    data() {
      return {
        point: 'Room 404',
        method: 'Card',
        date: 'December, 12 09:20',
        code: 4317,
        comment: 'Hey! I’m allergic to pineapples. Exclude them from fruit dessert, please.'
      };
    },
    computed: {
      ...mapState('receipt', ['location', 'order', 'products'])
    },
    methods: {
      goHome() {
        this.$router.push('/');
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
  }
</style>
