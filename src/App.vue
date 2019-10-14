<template>
  <div id="app">
    <page>
      <router-view/>
    </page>
  </div>
</template>

<script>
  import Page from './containers/Page';

  export default {
    name: 'App',
    components: {
      Page,
    },
  };
</script>

<style lang="less">
  @import "helpers/transitions";
  @import "helpers/fonts";

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: Tahoma, sans-serif;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
  }

  #app {
    display: flex;
    min-height: 100%;
  }
</style>
