<template>
	<div class="terms">
    <HeaderBack :text="$t('terms.header')"/>

    <article class="terms__content container">
      <h4 class="terms__header">{{ $t('terms.contentHeader') }}</h4>
      <p class="terms__text">{{ $t('terms.content') }}</p>
    </article>
  </div>
</template>

<script>
  import HeaderBack from '../../components/headers/HeaderBack';
  export default {
    name: 'Terms',
    components: { HeaderBack }
  };
</script>

<style lang="less" scoped>
  .terms {

    &__header {
      margin: 0 0 20px;
    }

    &__text {
      font-size: 14px;
    }
  }
</style>
