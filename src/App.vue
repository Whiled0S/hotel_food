<template>
  <div id="app">
    <page>
      <router-view />
    </page>

    <transition name="slide">
      <modal v-show="modal"/>
    </transition>
  </div>
</template>

<script>
  import Page from './containers/Page';
  import Modal from './containers/Modal';

  import { createNamespacedHelpers } from 'vuex';

  const { mapGetters } = createNamespacedHelpers('modals');

  export default {
    name: 'App',
    components: {
      Page,
      Modal
    },
    computed: {
      ...mapGetters(['modal'])
    }
  };
</script>

<style lang="less">
  @import "helpers/transitions";

  html, body {
    width: 100%;
    height: 100%;
    font-family: Tahoma, sans-serif;
  }

  #app {
    display: flex;
    min-height: 100%;
  }
</style>
