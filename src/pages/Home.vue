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
      />

      <CardList
        header="Places in around"
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
        img: radisson
      };
    }
  };
</script>

<style scoped>
</style>
