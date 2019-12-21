<template>
  <div class="page-loader">
    <Loader/>
  </div>
</template>

<script>
  import Loader from "./Loader";

  export default {
    name: "PageLoader",
    components: {Loader}
  };
</script>

<style lang="less" scoped>
  .page-loader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
