<template>
  <div class="card">
    <div class="card__image">
      <img v-if="img" :src="img" alt="logo">
    </div>

    <p class="card__name">{{ name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      name: String,
      img: String
    }
  };
</script>

<style lang="less" scoped>
  .card {
    margin-right: 4px;
    width: 142px;
    flex-shrink: 0;

    &:last-child {
      margin-right: 0;
    }

    &__image {
      width: 100%;
      height: 142px;
      margin-bottom: 10px;
      background-color: #f5f5f5;
      border-radius: 11px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__name {
      color: #666666;
      font-weight: normal;
      margin: 0;
      padding-right: 10px;
    }
  }
</style>
