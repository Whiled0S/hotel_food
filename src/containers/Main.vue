<template>
	<main class="content">
    <slot />
  </main>
</template>

<script>
  export default {
    name: 'Main'
  };
</script>

<style scoped>
  .content {
    position: relative;
    padding-top: 25px;
    z-index: 5;
    background-color: #fff;
  }
</style>
