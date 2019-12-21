<template>
  <button @click="openMenu" class="ti-menu"/>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: "OpenMenuButton",
    methods: {
      ...mapActions(['openMenu'])
    }
  };
</script>

<style scoped>
  button {
    padding: 5px;
    margin: 0 -5px 0;
    border: none;
    outline: none;
    background-color: transparent;
  }
</style>
