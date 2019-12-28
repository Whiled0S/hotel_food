<template>
  <table class="receipt-info">
    <tr>
      <td>{{ $t('receipt.info.orderPoint') }}</td>
      <td>{{ point }}</td>
    </tr>
    <tr class="spacer"/>
    <tr>
      <td>{{ $t('receipt.info.paymentMethod') }}</td>
      <td>{{ method }}</td>
    </tr>
    <tr class="spacer"/>
    <tr>
      <td>{{ $t('receipt.info.date') }}</td>
      <td>{{ date | dateFilter }}</td>
    </tr>
    <tr class="spacer"/>
    <tr>
      <td>{{ $t('receipt.info.transactionCode') }}</td>
      <td>{{ code }}</td>
    </tr>
  </table>
</template>

<script>
  import {date} from "../../../helpers/common";

  export default {
    name: 'ReceiptInfo',
    props: {
      point: String,
      method: String,
      date: String,
      code: Number
    },
    filters: {
      dateFilter: date
    }
  };
</script>

<style lang="less" scoped>
  .receipt-info {
    width: 100%;
    margin: 0 0 25px;
    padding: 16px;
    font-size: 14px;
    font-weight: 500;
    background-color: #f5f5f5;
    border-radius: 6px;

    tr {
      line-height: 1;
    }

    tr.spacer {
      height: 18px;
    }

    td {
      padding: 0;
      border: none;
      line-height: 1;
    }

    td:first-child {
      min-width: 110px;
    }

    td:last-child {
      text-align: right;
    }
  }
</style>
