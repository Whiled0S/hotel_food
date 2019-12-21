<template>
  <div v-if="!loading" class="order-history">
    <HeaderClose
      text="Order history"
      @close="goToPreviousPage"
    />

    <div class="container order-history__container">
      <Order
        v-for="{
          order: { id, createdAt: { date }, totalPrecisionAmount, currency: { name: curName } },
          location: { name: address },
          products
        } in orders"
        :key="id"
        :number="id"
        :date="date"
        :address="address"
        :currency="curName"
        :cost="totalPrecisionAmount"
      >
        <div class="order-history__list-container">
          <OrderList
            :items="products"
          />
        </div>
      </Order>
    </div>
  </div>
  <PageLoader v-else/>
</template>

<script>
  import {mapState} from 'vuex';

  import HeaderClose from '../../components/headers/HeaderClose';
  import Order from './components/Order';
  import OrderList from '../../containers/OrderList';
  import PageLoader from "../../components/PageLoader";
  import goToPreviousPage from "../../mixins/goToPreviousPage";

  export default {
    name: 'OrderHistory',
    mixins: [goToPreviousPage],
    components: {
      PageLoader,
      OrderList,
      Order,
      HeaderClose
    },
    computed: {
      ...mapState('history', ['orders', 'loading'])
    }
  };
</script>

<style lang="less" scoped>
  .order-history {
    height: 100%;
    display: flex;
    flex-direction: column;

    &__container {
      margin-bottom: 20px;
    }

    &__list-container {
      padding: 10px 0;
      margin-bottom: 10px;
      border-bottom: 1px solid #d8d8d8;
    }

    &__terms {
      position: sticky;
      bottom: 0;
      width: 100%;
      padding: 20px 16px;
      font-size: 14px;
      color: #ffffff;
      background-color: #000000;
      border: none;
      outline: none;
      text-align: left;
    }
  }
</style>
