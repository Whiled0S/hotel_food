<template>
	<div class="back-header">
    <button
      class="ti-angle-left"
      @click="goToPreviousPage"
    />
    <h4 class="back-header__text">{{ text }}</h4>

    <slot/>
  </div>
</template>

<script>
  import goToPreviousPage from "../../mixins/goToPreviousPage";

  export default {
    name: 'HeaderBack',
    mixins: [goToPreviousPage],
    props: {
      text: String
    }
  };
</script>

<style lang="less" scoped>
  .back-header {
    position: sticky;
    top: 0;
    height: 50px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    z-index: 10;

    &__text {
      width: 100%;
      font-size: 16px;
      font-weight: normal;
      text-align: center;
      margin: 0;
    }
  }

  .ti-angle-left {
    position: absolute;
    outline: none;
    border: none;
    padding: 0;
    background-color: transparent;
    font-weight: bolder;
  }
</style>
