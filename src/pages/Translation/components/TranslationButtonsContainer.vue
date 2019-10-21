<template>
  <div class="translation-buttons-container container">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'TranslationButtonsContainer'
  };
</script>

<style scoped>
  .translation-buttons-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #ffffff;
    position: sticky;
    bottom: 0;
  }
</style>
