<template>
  <li class="menu-list-item"
      :class="{'active': active}">
    <slot/>
  </li>
</template>

<script>
  export default {
    name: 'MenuListItem',
    props: {
      active: Boolean
    }
  };
</script>

<style lang="less" scoped>
  .menu-list-item {
    padding: 11px 12px 11px 13px;
    list-style: none;
    font-weight: bold;
    border-radius: 10px;
    color: #000000;

    &.active {
      background-color: #000000;
      color: #ffffff;
    }
  }
</style>
