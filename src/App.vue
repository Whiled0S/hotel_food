<template>
  <div id="app">
    <div id="pages">
      <router-view/>
    </div>

    <modal v-show="this.modal"/>
  </div>
</template>

<script>
  import Modal from './components/Modal';

  import { createNamespacedHelpers } from 'vuex';

  const { mapGetters } = createNamespacedHelpers('modals');

  export default {
    name: 'App',
    components: {
      Modal
    },
    computed: {
      ...mapGetters([
        'modal'
      ])
    }
  };
</script>

<style lang="less">
  html, body {
    width: 100%;
    height: 100%;
  }

  #app {
    min-height: 100%;
  }
</style>
