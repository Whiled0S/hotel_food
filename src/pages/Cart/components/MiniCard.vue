<template>
	<div class="mini-card">
    <div class="mini-card__media-container">
      <img class="mini-card__image" :src="img" alt="dish">
      <span class="mini-card__price">400$</span>
    </div>
    <p class="mini-card__title">Margarita</p>
  </div>
</template>

<script>
  import salad from '../../../assets/Salad.jpg';

  export default {
    name: 'MiniCard',
    data() {
      return {
        img: salad
      };
    }
  };
</script>

<style lang="less" scoped>
  .mini-card {
    width: 100%;

    &__media-container {
      position: relative;
      width: 100%;
      padding-top: 100%;
      margin-bottom: 10px;
      border-radius: 11px;
      overflow: hidden;
    }

    &__image {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    &__price {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 3px 0;
      font-size: 13px;
      color: #ffffff;
      background-color: rgba(0, 0, 0, 0.41);
      text-align: center;
    }

    &__title {
      font-size: 15px;
    }
  }
</style>
