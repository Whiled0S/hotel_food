<template>
  <div class="translation-list">
    <h4 class="translation-list__header">{{ header }}</h4>

    <ul class="translation-list__item-container">
      <slot/>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TranslationList',
    props: {
      header: String
    }
  };
</script>

<style lang="less" scoped>
  .translation-list {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &__header {
      margin: 0 0 10px;
    }

    &__item-container {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
</style>
