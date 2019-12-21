<template>
  <div class="container">
    <div class="card-tiles">
      <Card
        v-for="{ id, image: { src }, name, currency, precisionPrice } in tiles"
        :id="id"
        :key="id"
        :img="src"
        :name="name"
        :price="precisionPrice"
        :currency="currency"
        :link="link"
      />
    </div>
  </div>
</template>

<script>
  import Card from "../components/Card";

  export default {
    name: "CardTiles",
    components: {Card},
    props: {
      tiles: Array,
      link: String
    }
  };
</script>

<style lang="less" scoped>
  .card-tiles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-auto-flow: row;
    grid-gap: 20px 10px;
  }
</style>
