<template>
	<div class="order-history">
    <CloseHeader/>

    <div class="container">
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
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
