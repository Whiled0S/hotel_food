<template>
  <div class="page">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Page'
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
