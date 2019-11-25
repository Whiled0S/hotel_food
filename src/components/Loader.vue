<template>
  <div class="loader">
    <img src="../assets/icons/spinner.svg" alt="spinner">
  </div>
</template>

<script>
  export default {
    name: "Loader"
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
