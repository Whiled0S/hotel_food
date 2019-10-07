<template>
  <div id="home">
    <Header />
    <h1>HOME</h1>
    <router-link to="/dishes">
      <button>DISHES</button>
    </router-link>
  </div>
</template>

<script>
  import Header from '../components/Header';

  export default {
    name: 'Home',
    components: {
      Header
    }
  };
</script>

<style scoped>

</style>
