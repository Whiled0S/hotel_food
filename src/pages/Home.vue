<template>
  <div id="home">
    <Header />
    <h1 @click="openModal('terms')">HOME</h1>
    <router-link to="/dish">to dish</router-link>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import {mapActions} from 'vuex';

  export default {
    name: 'Home',
    components: {
      Header
    },

    methods: {
      ...mapActions('modals', ['openModal']),
    }
  };
</script>

<style scoped>

</style>
