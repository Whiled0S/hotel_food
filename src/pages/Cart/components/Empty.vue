<template>
  <div class="empty">
    <h3>{{ $t('cart.empty.topText') }}</h3>
    <router-link class="empty__link" :to="`/${locationHash}`">{{ $t('cart.empty.botText') }}</router-link>
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
