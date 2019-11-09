<template>
  <div class="card-list">
    <h4 class="card-list__header">{{ header }}</h4>

    <div class="card-list__container">
      <div class="scroll-padding"></div>
      <Card
        v-for="{id, image: { src }, name, price} in cards"
        :key="id"
        :name="name"
        :img="src"
        :price="price"
        :link="link"
      />
      <div class="scroll-padding"></div>
    </div>
  </div>
</template>

<script>
  import Card from '../components/Card';

  export default {
    name: 'CardList',
    components: {
      Card
    },
    props: {
      header: String,
      cards: Array,
      link: String
    },
  };
</script>

<style lang="less" scoped>
  ::-webkit-scrollbar {
    display: none;
  }

  .card-list {
    margin-bottom: 10px;

    &__header {
      font-weight: bold;
      padding-left: 16px;
      margin-bottom: 10px;
      margin-top: 0;
    }

    &__container {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
    }
  }

  .scroll-padding {
    min-width: 16px;
  }
</style>
