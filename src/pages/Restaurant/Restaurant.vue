<template>
  <div v-if="!loading" id="restaurant">
    <Header/>

    <SubheaderHotel
      :headline="location.name"
      :description="location.description"
      :img="location.image.src"
    />

    <Main>
      <SubheaderBack
        :text="business.name | capitalize"
      />

      <MenuList
        :items="categories"
        @select="getDishes"
      />

      <template v-if="!itemsLoading">
        <template v-if="blocks">
          <CardList
            v-for="{ name, items } in blocks"
            :key="name"
            :header="name"
            :cards="items"
            :link="`/${locationHash}/dish`"
          />
        </template>

        <template v-else-if="products">
          <CardTiles
            :tiles="products"
            :link="`/${locationHash}/dish`"
          />
        </template>
      </template>

      <template v-else>
        <Loader/>
      </template>
    </Main>
  </div>
  <PageLoader v-else />
</template>

<script>
  import {mapState, mapActions, mapMutations, mapGetters} from 'vuex';
  import {capitalize} from "../../helpers/common";

  import Header from '../../components/headers/Header';
  import SubheaderHotel from '../../components/subheaders/SubheaderHotel';
  import Main from '../../containers/Main';
  import MenuList from '../../containers/MenuList';
  import CardList from '../../containers/CardList';
  import CardTiles from "../../containers/CardTiles";

  import SubheaderBack from '../../components/subheaders/SubheaderBack';
  import Loader from "../../components/Loader";
  import PageLoader from "../../components/PageLoader";

  export default {
    name: 'Home',
    components: {
      PageLoader,
      Loader,
      SubheaderBack,
      Header,
      SubheaderHotel,
      Main,
      MenuList,
      CardList,
      CardTiles
    },
    filters: {
      capitalize
    },
    async created() {
      this.SET_LOADING(true);

      await this.getRestaurantData({businessId: this.businessId});

      this.SET_LOADING(false);
    },
    computed: {
      ...mapState('restaurant', ['location', 'business', 'loading', 'blocks', 'products', 'itemsLoading']),
      ...mapState(['locationHash']),
      ...mapGetters('restaurant', ['categories']),

      businessId() {
        return this.$route.params.id;
      }
    },
    methods: {
      ...mapActions('restaurant', ['getRestaurantData', 'cleanDishes', 'getBlocks', 'getProductByCategory']),
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
