<template>
  <router-link
    to="/restaurant"
    tag="div"
    class="card"
  >
    <div class="card__image">
      <img v-if="img" :src="img" alt="logo">
      <span v-if="price" class="card__price">{{ price }}$</span>
    </div>

    <p class="card__name">{{ name }}</p>
  </router-link>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      name: String,
      img: String,
      price: Number
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
      position: relative;
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

    &__price {
      position: absolute;
      padding: 3px 12px;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.41);
      border-top-left-radius: 10.5px;
      color: #ffffff;
      font-size: 13px;
    }

    &__name {
      color: #666666;
      font-weight: normal;
      margin: 0;
      padding-right: 10px;
    }
  }
</style>
