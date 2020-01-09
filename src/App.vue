<template>
  <div id="app">
    <page>
      <router-view/>
    </page>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import Page from './containers/Page';

  export default {
    name: 'App',
    components: {
      Page,
    },
    computed: {
      ...mapState(['locationHash'])
    },
    methods: {
      ...mapActions('cart', ['getCart'])
    },
    watch: {
      '$route':{
        handler: (to,) => {
          document.title = to.meta.title || 'QUAR';
        },
        immediate: true
      }
    },
    created() {
      if (!this.locationHash) return;

      this.getCart();
    }
  };
</script>

<style lang="less">
  @import "style/main";
</style>
