import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['previousUrl'])
  },
  methods: {
    goToPreviousPage() {
      this.$router.push(this.previousUrl);
    }
  }
};
