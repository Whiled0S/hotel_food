<template>
  <ul class="menu-list">
    <li class="scroll-padding"></li>

    <MenuListItem
      v-for="(item, index) in items"
      :key="index"
      :active="item === active"
      @click="setActive(item)"
    >
      {{ item }}
    </MenuListItem>

    <li class="scroll-padding"></li>
  </ul>
</template>

<script>
  import MenuListItem from '../components/MenuListItem';

  export default {
    name: 'Menu',
    components: { MenuListItem },
    props: {
      items: Array,
    },
    data() {
      return {
        active: this.items[0]
      };
    },
    methods: {
      setActive(item) {
        this.active = item;
      }
    }
  };
</script>

<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }

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
