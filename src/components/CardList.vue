<template>
  <div class="card-list">
    <h4 class="card-list__header">{{ header }}</h4>

    <div class="card-list__container">
      <div class="scroll-padding"></div>
      <Card
        v-for="{id, img, name} in cards"
        :key="id"
        :name="name"
        :img="img"
      />
      <div class="scroll-padding"></div>
    </div>
  </div>
</template>

<script>
  import Card from './Card';

  export default {
    name: 'CardList',
    components: {
      Card
    },
    props: {
      header: String
    },
    data () {
      return {
        cards: [
          {
            id: 0,
            img: null,
            name: 'Cafe Radisson'
          },
          {
            id: 1,
            img: null,
            name: 'Lobbi-Bar Radisson'
          },
          {
            id: 2,
            img: null,
            name: 'Lobbi-Bar Radisson'
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
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
