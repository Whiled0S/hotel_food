<template>
  <div id="home">
    <Header/>
    <SubHeader
      headline="Double room №24"
      description="Get your food and drinks delivered to your room"
      :img="img"
    />
    <Main>
      <MenuList/>

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
  import Header from '../components/Header';
  import SubHeader from '../components/SubHeader';
  import Main from '../containers/Main';
  import MenuList from '../components/MenuList';
  import CardList from '../components/CardList';

  import radisson from '../assets/Radisson.png';
  import hotel from '../assets/MacDonalds.png';

  export default {
    name: 'Home',
    components: {
      Header,
      SubHeader,
      Main,
      MenuList,
      CardList
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
        ]
      };
    }
  };
</script>

<style scoped>
</style>
