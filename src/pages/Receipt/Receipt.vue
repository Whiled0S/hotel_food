<template>
  <div class="receipt">
    <HeaderClose
      text="Order Receipt #20"
      @close="goHome"
    />

    <div class="container">
      <div class="receipt__list-container">
        <OrderList
          :items="items"
        />
      </div>

      <div class="receipt__total">
        <span class="receipt__total-text">Total:</span>
        <span class="receipt__total-text">AED 243</span>
      </div>

      <ReceiptInfo
        :point="point"
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
  import HeaderClose from '../../components/headers/HeaderClose';
  import OrderList from '../../containers/OrderList';
  import ReceiptInfo from './components/ReceiptInfo';
  import ReceiptComment from './components/ReceiptComment';

  export default {
    name: 'Receipt',
    components: { ReceiptComment, ReceiptInfo, OrderList, HeaderClose },
    data() {
      return {
        point: 'Room 404',
        method: 'Card',
        date: 'December, 12 09:20',
        code: 4317,
        comment: 'Hey! I’m allergic to pineapples. Exclude them from fruit dessert, please.',
        items: [
          {
            name: 'Buffalo burrata with cherry tomatoes and pesto',
            parameters: ['140g', '250 cal'],
            price: 35,
            amount: 4
          },
          {
            name: 'Mozzarella curd',
            parameters: ['140g', '250 cal'],
            price: 78,
            amount: 2
          },
          {
            name: 'Mozzarella curd',
            parameters: ['140g', '250 cal'],
            price: 35,
            amount: 2
          }
        ]
      };
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  };
</script>

<style lang="less" scoped>
  .receipt {

    &__list-container {
      padding-bottom: 10px;
      margin-bottom: 10px;
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
