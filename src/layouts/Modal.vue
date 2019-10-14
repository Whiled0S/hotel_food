<template>
  <div class="modal" @click="closeModal"></div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'Modal',
    props: {
      active: Boolean
    },
    methods: {
      ...mapActions('modals', ['closeModal'])
    }
  };
</script>

<style scoped lang="less">
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #3498db;
    z-index: 10;
  }
</style>
