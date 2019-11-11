<template>
  <div class="card-list">
    <h4 class="card-list__header">{{ header }}</h4>

    <div class="card-list__container">
      <div class="scroll-padding"></div>

      <div class="card-list__cards">
        <Card
          v-for="{id, image: { src }, name, price} in cards"
          :key="id"
          :id="id"
          :name="name"
          :img="src"
          :price="price"
          :link="link"
        />
      </div>

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

    &__cards {
      display: grid;
      grid-template-rows: 1fr;
      grid-auto-columns: 142px;
      grid-auto-flow: column;
      grid-column-gap: 10px;
    }
  }

  .scroll-padding {
    min-width: 16px;
  }
</style>
