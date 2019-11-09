<template>
  <div id="home">
    <Header/>

    <SubheaderHotel
      headline="Double room №24"
      description="Get your food and drinks delivered to your room"
      :img="img"
    />

    <Main>
      <MenuList
        :items="items"
      />

      <CardList
        header="Hotel"
        :cards="hotels"
        link="restaurant"
      />

      <CardList
        header="Places in around"
        :cards="hotels"
        link="restaurant"
      />
    </Main>
  </div>
</template>

<script>
  import Header from '../../components/headers/Header';
  import SubheaderHotel from '../../components/subheaders/SubheaderHotel';
  import Main from '../../containers/Main';
  import MenuList from '../../containers/MenuList';
  import CardList from '../../containers/CardList';

  import radisson from '../../assets/Radisson.png';
  import hotel from '../../assets/MacDonalds.png';
  import RPC from "../../rpc";

  export default {
    name: 'Home',
    components: {
      Header,
      SubheaderHotel,
      Main,
      MenuList,
      CardList
    },
    mounted() {
      RPC.getIndexData('c4ca4238a0b923820dcc509a6f75849b');
    },
    data() {
      return {
        img: radisson,
        hotels: [
          {
            id: 0,
            img: hotel,
            name: 'Cafe Radisson',
          },
          {
            id: 1,
            img: hotel,
            name: 'Lobbi-Bar Radisson',
          },
          {
            id: 2,
            img: hotel,
            name: 'Lobbi-Bar Radisson'
          }
        ],
        items: [
          'All',
          'Starters',
          'Salads',
          'Desserts',
          'Italian',
          'Other',
          'More'
        ]
      };
    }
  };
</script>

<style scoped>
</style>
