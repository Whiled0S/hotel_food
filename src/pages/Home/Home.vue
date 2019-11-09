<template>
  <div v-if="!isLoading" id="home">
    <Header/>

    <SubheaderHotel
      v-if="location && company"
      :headline="location.name"
      :description="location.description"
      :img="company.image.src"
    />

    <Main>
      <MenuList
        :items="categories"
      />

      <CardList
        v-for="{ name, items } in blocks"
        :key="name"
        :header="name"
        :cards="items"
        link="restaurant"
      />
    </Main>
  </div>
</template>

<script>
  import Header from '../../components/headers/Header';
  import SubheaderHotel from '../../components/subheaders/SubheaderHotel';
  import Main from '../../containers/Main';
  import MenuList from '../../containers/MenuList';
  import CardList from '../../containers/CardList';

  import {mapActions, mapState, mapMutations} from 'vuex';

  export default {
    name: 'Home',
    components: {
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
      ...mapState('home', ['company', 'location', 'categories', 'blocks', 'isLoading'])
    },
    methods: {
      ...mapActions('home', ['getIndexData']),
      ...mapMutations('home', ['SET_LOADING'])
    }
  };
</script>

<style scoped>
</style>
