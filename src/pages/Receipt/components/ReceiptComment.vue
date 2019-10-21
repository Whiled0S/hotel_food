<template>
	<div class="receipt-comment">
    <h5 class="receipt-comment__header">Comments</h5>
    <p class="receipt-comment__text">{{ comment }}</p>
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
      padding-left: 35px;
      font-size: 12px;
      font-weight: 500;
    }
  }
</style>
