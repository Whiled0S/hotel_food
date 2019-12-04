<template>
  <div class="cart" v-if="itemsSet && orderSet">
    <HeaderBack text="Cart">
      <button class="cart__clear" @click="clearCart">Clear all</button>
    </HeaderBack>

    <div class="container">
      <ProductList :items="items"/>

      <div class="cart__info">
        <table class="cart__total">
          <tr>
            <td>Total:</td>
            <td>AED 243</td>
          </tr>
        </table>

        <div class="cart-comment">
          <label for="comment" class="cart-comment__title">Comments</label>

          <textarea
            id="comment"
            name="comment"
            class="cart-comment__area"
            placeholder="Put your comments here…"
          />

          <label class="cart-comment__agreement">
            <span>I agree with Terms and Conditions</span>
            <input type="checkbox" v-model="isAgreementChecked">
            <span class="cart-comment__checkmark">
              <span v-show="isAgreementChecked" class="ti-check"/>
            </span>
          </label>
        </div>

        <div class="cart-buttons">
          <div class="cart-buttons__block">
            <Button>Apple Pay</Button>
          </div>
          <div class="cart-buttons__block">
            <Button>Google Pay</Button>
          </div>
          <div class="cart-buttons__block">
            <Button>Credit Card</Button>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-offers">
      <p class="cart-offers__title">You might also like</p>
      <div class="cart-offers__container">
        <span class="scroll-padding"/>
        <MiniCard
          v-for="i in 5"
          :key="i"
        />
        <span class="scroll-padding"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';

  import HeaderBack from '../../components/headers/HeaderBack';
  import ProductList from './components/ProductList';

  import Button from '../../components/Button';
  import MiniCard from './components/MiniCard';

  export default {
    name: 'Cart',
    components: {MiniCard, Button, ProductList, HeaderBack},
    data() {
      return {
        isAgreementChecked: true
      };
    },
    computed: {
      ...mapState('cart', ['items', 'order']),
      ...mapGetters('cart', ['itemsSet', 'orderSet']),
    },
    methods: {
      ...mapActions('cart', ['clearCart'])
    }
  };
</script>

<style lang="less" scoped>
  .cart {

    &__clear {
      position: absolute;
      height: 16px;
      right: 16px;
      padding: 0;
      margin: 0;
      font-size: 9px;
      border: none;
      outline: none;
      background-color: transparent;
    }

    &__total {
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;

      tr {
        display: flex;
      }

      td {
        flex-basis: 50%;
        border: none;
        padding: 0;

        &:last-child {
          text-align: right;
        }
      }
    }
  }

  .cart-comment {
    margin-bottom: 20px;

    ::placeholder {
      color: #d8d8d8;
      opacity: 1;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #d8d8d8;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #d8d8d8;
    }

    &__title {
      display: block;
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: normal;
    }

    &__area {
      width: 100%;
      height: 56px;
      margin-bottom: 20px;
      border: 1px solid #d8d8d8;
      resize: none;
      outline: none;
      padding: 11px;
      font-size: 14px;
    }

    &__agreement {
      display: block;
      position: relative;
      padding-left: 26px;
      height: 21px;
      line-height: 21px;
      font-size: 13px;
      color: #d8d8d8;
      user-select: none;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
    }

    &__checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 21px;
      width: 21px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: 1px solid #d8d8d8;
      border-radius: 4px;
    }
  }

  .cart-buttons {
    display: grid;
    grid-template: 'apple-pay google-pay' 1fr 'credit-card credit-card' 1fr;
    grid-gap: 10px 6px;
    margin-bottom: 20px;

    &__block {

      &:first-child {
        grid-area: apple-pay;
      }

      &:nth-child(2) {
        grid-area: google-pay;
      }

      &:last-child {
        grid-area: credit-card;
      }
    }
  }

  .cart-offers {
    margin-bottom: 10px;

    &__title {
      padding: 0 16px;
      font-size: 13px;
    }

    &__container {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .scroll-padding {
    min-width: 16px;
  }
</style>
