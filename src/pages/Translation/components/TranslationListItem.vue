<template>
	<li class="translation-list-item">
    <span>{{ text }}</span>
  </li>
</template>

<script>
  export default {
    name: 'TranslationListItem',
    props: {
      text: String
    }
  };
</script>

<style lang="less" scoped>
  .translation-list-item {
    padding: 10px 0;
    border-bottom: 1px solid #d8d8d8;
  }
</style>
