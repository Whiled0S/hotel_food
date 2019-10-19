<template>
	<div class="order-history">
    <CloseHeader/>

    <div class="order-history__container container">
      <Order
        v-for="{ id, number, date, address, cost, items } in orders"
        :key="id"
        :number="number"
        :date="date"
        :address="address"
        :cost="cost"
        :items="items"
      />
    </div>

    <router-link class="order-history__terms" tag="button" to="/terms">
      Terms of use
    </router-link>
  </div>
</template>

<script>
  import CloseHeader from '../components/CloseHeader';
  import Order from '../components/Order';
  export default {
    name: 'OrderHistory',
    components: { Order, CloseHeader },
    data() {
      return {
        orders: [
          {
            id: 1,
            number: '001',
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
            ],
            date: '01.02.2019 21:57',
            address: 'Room 404',
            cost: 243
          },
          {
            id: 2,
            number: '002',
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
            ],
            date: '01.02.2019 21:57',
            address: 'Room 404',
            cost: 243
          },
          {
            id: 3,
            number: '003',
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
            ],
            date: '01.02.2019 21:57',
            address: 'Room 404',
            cost: 243
          }
        ]
      };
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
      flex-grow: 1;
      overflow-y: scroll;
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
