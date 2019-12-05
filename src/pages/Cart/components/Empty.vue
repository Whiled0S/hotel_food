<template>
  <div class="empty">
    <h3>Your cart is empty</h3>
    <router-link class="empty__link" :to="`/${locationHash}`">Choose something in our menu</router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Empty",
    computed: {
      ...mapState(['locationHash'])
    }
  };
</script>

<style lang="less" scoped>
  .empty {
    text-align: center;

    &__link {
      color: #2b2423;
    }
  }
</style>
