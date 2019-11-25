<template>
  <router-link
    :to="id ? `${link}/${id}` : ''"
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
      id: Number,
      name: String,
      img: String,
      price: Number,
      link: String
    }
  };
</script>

<style lang="less" scoped>
  .card {
    width: 100%;
    flex-shrink: 0;

    &__image {
      width: 100%;
      padding-top: 100%;
      position: relative;
      margin-bottom: 10px;
      background-color: #f5f5f5;
      border-radius: 11px;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
