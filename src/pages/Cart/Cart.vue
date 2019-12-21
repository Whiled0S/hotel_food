<template>
  <div class="cart" v-if="itemsSet && orderSet && items.length">
    <HeaderBack text="Cart">
      <button class="cart__clear" @click="clearCart">Clear all</button>
    </HeaderBack>

    <div class="container">
      <ProductList :items="items"/>

      <div class="cart__info">
        <table class="cart__total">
          <tr>
            <td>Total:</td>
            <td>{{ order.currency.name | upper }} {{ total }}</td>
          </tr>
        </table>

        <div class="cart-comment">
          <label for="comment" class="cart-comment__title">Comments</label>

          <textarea
            id="comment"
            name="comment"
            v-model="comment"
            class="cart-comment__area"
            placeholder="Put your comments here…"
          />

          <label
            class="cart-comment__agreement"
            :class="{'cart-comment__agreement_highlighted': highlightTermsOfUse}"
            @click="processTermsClick"
          >
            <span class="text">I agree with Terms and Conditions</span>

            <input type="checkbox" v-model="isAgreementChecked">
            <span class="checkmark">
              <span v-show="isAgreementChecked" class="ti-check"/>
            </span>
          </label>
        </div>

        <div class="cart-buttons">
          <div class="cart-buttons__block">
            <Button
              @click="processCheckout({ acceptTermsOfUse: isAgreementChecked, comment })"
            >Credit Card
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="suggestedItems" class="cart-offers">
      <p class="cart-offers__title">You might also like</p>
      <div class="cart-offers__container">
        <span class="scroll-padding"/>
        <MiniCard
          v-for="{ id, name, currency: {unicode}, image: {src}, precisionPrice } in suggestedItems"
          :key="id"
          :name="name"
          :currency="unicode"
          :image="src"
          :price="precisionPrice"
          :link="`/${locationHash}/dish/${id}`"
        />
        <span class="scroll-padding"/>
      </div>
    </div>
  </div>
  <div v-else-if="itemsSet">
    <Header/>

    <div class="container">
      <Empty/>
    </div>
  </div>
  <PageLoader v-else/>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
  import {upper} from "../../helpers/common";

  import HeaderBack from '../../components/headers/HeaderBack';
  import ProductList from './components/ProductList';

  import Button from '../../components/Button';
  import MiniCard from './components/MiniCard';
  import Header from "../../components/headers/Header";
  import Empty from "./components/Empty";
  import PageLoader from "../../components/PageLoader";

  export default {
    name: 'Cart',
    components: {PageLoader, Empty, Header, MiniCard, Button, ProductList, HeaderBack},
    filters: {
      upper
    },
    data() {
      return {
        isAgreementChecked: true,
        comment: ''
      };
    },
    computed: {
      ...mapState(['locationHash']),
      ...mapState('cart', ['items', 'order', 'suggestedItems', 'highlightTermsOfUse']),
      ...mapGetters('cart', ['itemsSet', 'orderSet', 'total']),
    },
    methods: {
      ...mapActions('cart', ['clearCart', 'processCheckout']),
      ...mapMutations('cart', ['SET_HIGHLIGHT_TERMS']),

      processTermsClick() {
        if (this.highlightTermsOfUse) {
          this.SET_HIGHLIGHT_TERMS(false);
        }
      }
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

      .text {
        transition: color .3s;
      }

      .checkmark {
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
        transition: bordr-color .3s;
      }

      &_highlighted {

        .text {
          color: #e74c3c;
        }

        .checkmark {
          border-color: #e74c3c;
        }
      }
    }
  }

  .cart-buttons {
    margin-bottom: 20px;
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
