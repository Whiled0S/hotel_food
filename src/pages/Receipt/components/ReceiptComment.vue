<template>
	<div class="receipt-comment">
    <h5 class="receipt-comment__header">Comments</h5>
    <p class="receipt-comment__text"><img :src="require('../../../assets/icons/quotes.svg')" alt="quotes">{{ comment }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ReceiptComment',
    props: {
      comment: String
    }
  };
</script>

<style lang="less" scoped>
  .receipt-comment {
    margin-bottom: 20px;

    &__header {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    &__text {
      position: relative;
      padding-left: 35px;
      font-size: 12px;
      font-weight: 500;

      img {
        width: 10px;
        height: 10px;
        position: absolute;
        top: 0;
        left: 16px;
        font-weight: bolder;
        font-size: 11px;
      }
    }
  }
</style>
