<template>
  <div id="home">
    <Header/>
    <SubHeader/>
    <Main>
      <MenuList/>
    </Main>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import SubHeader from '../components/SubHeader';
  import Main from '../containers/Main';
  import MenuList from '../components/MenuList';

  export default {
    name: 'Home',
    components: {
      Header,
      SubHeader,
      Main,
      MenuList
    },
  };
</script>

<style scoped>
</style>
