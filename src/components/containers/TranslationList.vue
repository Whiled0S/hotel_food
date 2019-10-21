<template>
  <div class="translation-list">
    <h4 class="translation-list__header">{{ header }}</h4>

    <ul class="translation-list__item-container">
      <TranslationListItem
        v-for="(language, index) in languages"
        :key="index"
        :text="language"
      />
    </ul>
  </div>
</template>

<script>
  import TranslationListItem from '../../pages/Translation/components/TranslationListItem';
  export default {
    name: 'TranslationList',
    components: { TranslationListItem },
    props: {
      header: String,
      languages: Array
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
