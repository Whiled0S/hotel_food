<template>
  <div class="default">
    <h2>Location is required</h2>
  </div>
</template>

<script>
  export default {
    name: "Default"
  };
</script>

<style lang="less" scoped>
  .default {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      text-decoration: underline;
    }
  }
</style>
