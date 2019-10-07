<template>
  <div id="header">
    <span>HEADER</span>
    <button @click="openTermsModal">TERMS</button>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const { mapActions } = createNamespacedHelpers('modals');

  export default {
    name: 'Header',

    methods: {
      ...mapActions({
        openModal: 'openModal'
      }),

      openTermsModal() {
        this.openModal({
          name: 'terms'
        });
      }
    }
  };
</script>

<style scoped lang="less">
  #header {
    height: 50px;
    border-bottom: 1px solid #CCC;
    text-align: center;
  }
</style>
