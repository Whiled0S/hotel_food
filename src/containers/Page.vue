<template>
  <div class="page">
    <slot/>

    <transition name="fade">
      <MainMenu v-show="isMenuOpened"/>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import MainMenu from '../components/MainMenu';

  export default {
    name: 'Page',
    components: { MainMenu },
    computed: {
      ...mapState(['isMenuOpened'])
    }
  };
</script>

<style scoped>
  .page {
    position: relative;
    width: 100%;
    min-height: 100%;
    z-index: 0;
  }
</style>
