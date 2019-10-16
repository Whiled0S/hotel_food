<template>
	<button
    @click="emitClick"
    class="button"
  >
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    methods: {
      emitClick() {
        this.$emit('click');
      }
    }
  };
</script>

<style scoped>
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
  }
</style>
