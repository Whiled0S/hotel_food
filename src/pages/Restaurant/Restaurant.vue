<template>
  <div id="restaurant">
    <Header/>
    <SubheaderHotel
      headline="Double room №24"
      description="Get your food and drinks delivered to your room"
      :img="img"
    />
    <Main>
      <SubheaderBack
        text="Restorante Via D’Argento"
      />

      <MenuList
        :items="items"
      />

      <CardList
        header="Salads"
        :cards="dishes"
        link="dish"
      />

      <CardList
        header="Pizza"
        :cards="dishes"
        link="dish"
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
  import dish from '../../assets/Dish.png';
  import SubheaderBack from '../../components/subheaders/SubheaderBack';

  export default {
    name: 'Home',
    components: {
      SubheaderBack,
      Header,
      SubheaderHotel,
      Main,
      MenuList,
      CardList
    },
    data () {
      return {
        img: radisson,
        dishes: [
          {
            id: 0,
            img: dish,
            name: 'Cafe Radisson',
            price: 200
          },
          {
            id: 1,
            img: dish,
            name: 'Lobbi-Bar Radisson',
            price: 100
          },
          {
            id: 2,
            img: dish,
            name: 'Lobbi-Bar Radisson',
            price: 150
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
