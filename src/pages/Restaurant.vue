<template>
  <div id="restaurant">
    <Header/>
    <SubHeader
      headline="Double room №24"
      description="Get your food and drinks delivered to your room"
      :img="img"
    />
    <Main>
      <HomeLink
        text="Restorante Via D’Argento"
      />
      <MenuList/>
      <CardList
        header="Salads"
        :cards="dishes"
      />
      <CardList
        header="Pizza"
        :cards="dishes"
      />
    </Main>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import SubHeader from '../components/SubHeader';
  import Main from '../containers/Main';
  import MenuList from '../components/MenuList';
  import CardList from '../components/CardList';

  import radisson from '../assets/Radisson.png';
  import dish from '../assets/Dish.png';
  import HomeLink from '../components/HomeLink';

  export default {
    name: 'Home',
    components: {
      HomeLink,
      Header,
      SubHeader,
      Main,
      MenuList,
      CardList
    },
    data() {
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
        ]
      };
    }
  };
</script>

<style scoped>
</style>
