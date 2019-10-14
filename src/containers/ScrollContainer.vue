<template>
  <div class="scroll-container">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'ScrollContainer'
  };
</script>

<style scoped>
  .scroll-container {
    width: 100%;
    overflow-x: scroll;
  }
</style>
