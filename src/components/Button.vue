<template>
  <button
    @click="emitClick"
    class="button"
    :class="{disabled}"
  >
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      emitClick () {
        this.$emit('click');
      }
    }
  };
</script>

<style lang="less" scoped>
  .button {
    padding: 12px 0;
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    background-color: #000000;
    border-radius: 10px;
    width: 100%;
    outline: none;
    border: none;

    &.disabled {
      background-color: #d8d8d8;
    }
  }
</style>
