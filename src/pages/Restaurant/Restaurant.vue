<template>
  <div v-if="!loading" id="restaurant">
    <Header/>
    <SubheaderHotel
      headline="Double room №24"
      description="Get your food and drinks delivered to your room"
      img="img"
    />
    <Main>
      <SubheaderBack
        text="Restorante Via D’Argento"
      />

      <MenuList
        :items="categories"
        @select="getDishes"
      />

      <template v-if="blocks">
        <CardList
          v-for="{ name, items } in blocks"
          :key="name"
          :header="name"
          :cards="items"
          link="/dish"
        />
      </template>

      <template v-else-if="products">
        <CardTiles
          :tiles="products"
          link="/dish"
        />
      </template>
    </Main>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations, mapGetters} from 'vuex';

  import Header from '../../components/headers/Header';
  import SubheaderHotel from '../../components/subheaders/SubheaderHotel';
  import Main from '../../containers/Main';
  import MenuList from '../../containers/MenuList';
  import CardList from '../../containers/CardList';
  import CardTiles from "../../containers/CardTiles";

  import SubheaderBack from '../../components/subheaders/SubheaderBack';

  export default {
    name: 'Home',
    components: {
      SubheaderBack,
      Header,
      SubheaderHotel,
      Main,
      MenuList,
      CardList,
      CardTiles
    },
    async created() {
      this.SET_LOADING(true);

      await this.getProductsByBusiness({businessId: this.businessId});

      this.SET_LOADING(false);
    },
    computed: {
      ...mapState('restaurant', ['loading', 'blocks', 'products']),
      ...mapGetters('restaurant', ['categories']),

      businessId() {
        return this.$route.params.id;
      }
    },
    methods: {
      ...mapActions('restaurant', ['getProductsByBusiness', 'cleanDishes', 'getBlocks', 'getProductByCategory']),
      ...mapMutations('restaurant', ['SET_LOADING']),

      getDishes(categoryId) {
        this.cleanDishes().then(() => {
          if (categoryId === -1) {
            this.getBlocks({businessId: this.businessId});
          } else {
            this.getProductByCategory({businessId: this.businessId, categoryId});
          }
        });
      }
    }
  };
</script>

<style scoped>
</style>
