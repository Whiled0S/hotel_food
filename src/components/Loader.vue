<template>
  <div class="loader" :class="{'loader_button': button}">
    <img v-if="white" src="../assets/icons/spinner-white.svg" alt="spinner">
    <img v-else src="../assets/icons/spinner.svg" alt="spinner">
  </div>
</template>

<script>
  export default {
    name: "Loader",
    props: {
      white: Boolean,
      button: Boolean
    }
  };
</script>

<style lang="less" scoped>
  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      animation-name: spin;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    &_button {
      height: 16px;
      position: relative;

      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }

    to {
      transform: rotateZ(359deg);
    }
  }
</style>
