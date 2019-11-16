<template>
  <div v-if="!loading" id="home">
    <Header/>

    <SubheaderHotel
      :headline="location.name"
      :description="location.description"
      :img="company.image.src"
    />

    <Main>
      <MenuList
        :items="categories"
        @select="getBusinesses"
      />

      <template v-if="blocks">
        <CardList
          v-for="{ name, items } in blocks"
          :key="name"
          :header="name"
          :cards="items"
          :link="`/${locationHash}/restaurant`"
        />
      </template>

      <template v-else-if="businesses">
        <CardTiles
          :tiles="businesses"
          :link="`/${locationHash}/restaurant`"
        />
      </template>
    </Main>
  </div>
</template>

<script>
  import Header from '../../components/headers/Header';
  import SubheaderHotel from '../../components/subheaders/SubheaderHotel';
  import Main from '../../containers/Main';
  import MenuList from '../../containers/MenuList';
  import CardList from '../../containers/CardList';

  import {mapActions, mapState, mapMutations, mapGetters} from 'vuex';
  import CardTiles from "../../containers/CardTiles";

  export default {
    name: 'Home',
    components: {
      CardTiles,
      Header,
      SubheaderHotel,
      Main,
      MenuList,
      CardList
    },
    async created() {
      this.SET_LOADING(true);

      await this.getIndexData();

      this.SET_LOADING(false);
    },
    computed: {
      ...mapState('home', ['company', 'location', 'blocks', 'businesses', 'loading']),
      ...mapState(['locationHash']),
      ...mapGetters('home', ['categories'])
    },
    methods: {
      ...mapActions('home', ['getIndexData', 'getBlocks', 'getBusinessesByCategory', 'cleanRestaurants']),
      ...mapMutations('home', ['SET_LOADING']),

      getBusinesses(categoryId) {
        this.cleanRestaurants().then(() => {
          if (categoryId === -1) {
            this.getBlocks();
          } else {
            this.getBusinessesByCategory({categoryId});
          }
        });
      }
    }
  };
</script>

<style scoped>
</style>
