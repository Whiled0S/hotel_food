<template>
	<div class="close-header">
    <button
      class="ti-close"
      @click="emitClose"
    ></button>
    <h4 class="close-header__text">{{ text }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'HeaderClose',
    props: {
      text: String
    },
    methods: {
      goToPreviousPage() {
        this.$router.go(-1);
      },
      emitClose() {
        this.$emit('close');
      }
    }
  };
</script>

<style lang="less" scoped>
  .close-header {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #fff;
    padding: 25px 16px;
    z-index: 1;

    &__text {
      width: 100%;
      font-weight: normal;
      padding: 0 11px;
      margin: 0;
      text-align: center;
    }

    .ti-close {
      position: absolute;
      font-size: 11px;
      font-weight: bold;
      color: #979797;
      border: none;
      outline: none;
      padding: 0;
      background-color: transparent;
    }
  }
</style>
