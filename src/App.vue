<template>
  <div id="app">
    <page>
      <transition name="slide">
        <router-view/>
      </transition>
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
  @import "helpers/carousel";
  @import "assets/fonts/Themify/themify-icons.css";

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
    color: #2b2423;
  }

  #app {
    display: flex;
    min-height: 100%;
  }

  .container {
    width: 100%;
    padding: 0 16px;
  }
</style>
