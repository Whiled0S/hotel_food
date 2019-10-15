<template>
  <div class="home-link">
    <router-link
      tag="span"
      class="ti-arrow-left"
      to="/"
    />
    <h4>{{ text }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'HomeLink',
    props: {
      text: String
    }
  };
</script>

<style lang="less" scoped>
  .home-link {
    display: flex;
    margin-bottom: 20px;
    padding: 0 16px;

    h4 {
      padding: 0;
      margin: 0;
    }

    .ti-arrow-left {
      margin-right: 14px;
      font-weight: bold;
    }
  }
</style>
