<template>
  <ul class="menu-list">
    <li class="scroll-padding"></li>
    <MenuListItem
      v-for="{id, text} in items"
      :key="id"
      :active="id === active"
    >{{ text }}</MenuListItem>
    <li class="scroll-padding"></li>
  </ul>
</template>

<script>
  import MenuListItem from './MenuListItem';

  export default {
    name: 'Menu',
    components: { MenuListItem },
    data () {
      return {
        active: 1,
        items: [
          {
            id: 0,
            text: 'All'
          },
          {
            id: 1,
            text: 'Starters'
          },
          {
            id: 2,
            text: 'Salads'
          },
          {
            id: 3,
            text: 'Desserts'
          },
          {
            id: 4,
            text: 'Italian'
          },
          {
            id: 5,
            text: 'Other'
          },
          {
            id: 6,
            text: 'More'
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .menu-list {
    width: 100%;
    display: flex;
    padding: 0;
    margin: 0 0 20px;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }

  .scroll-padding {
    list-style: none;
    min-width: 5px;
  }
</style>
