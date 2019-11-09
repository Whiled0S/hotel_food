<template>
  <ul class="menu-list">
    <li class="scroll-padding"></li>

    <MenuListItem
      v-for="{ id, name } in items"
      :key="id"
      :active="id === selected"
      @click="select(id)"
    >
      <span>{{ name }}</span>
    </MenuListItem>

    <li class="scroll-padding"></li>
  </ul>
</template>

<script>
  import MenuListItem from '../components/MenuListItem';

  export default {
    name: 'Menu',
    components: {MenuListItem},
    props: {
      items: Array,
    },
    data() {
      return {
        selected: this.items[0].id
      };
    },
    methods: {
      select(itemId) {
        this.selected = itemId;

        this.$emit('select', this.selected);
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
