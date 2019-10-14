<template>
  <div class="subheader">
    <div class="subheader__image">
      <img v-if="img" :src="img" alt="logo">
    </div>
    <div class="subheader__content">
      <h4 class="subheader__headline">{{ headline }}</h4>
      <p class="subheader__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Subheader',
    props: {
      img: String,
      headline: String,
      description: String
    }
  };
</script>

<style lang="less" scoped>
  .subheader {
    display: flex;
    flex-wrap: nowrap;
    position: sticky;
    top: 70px;
    min-height: 85px;
    padding: 14px 27px 13px 16px;
    background-color: #f0f0f0;
    z-index: 1;

    &__image {
      width: 75px;
      margin-right: 13px;
    }

    &__content {
      flex-grow: 1;
    }

    &__headline,
    &__description {
      margin: 0;
    }

    &__headline {
      color: #000000;
      font-weight: normal;
    }

    &__description {
      font-size: 14px;
      color: #666666;
    }
  }
</style>
