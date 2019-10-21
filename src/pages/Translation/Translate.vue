<template>
  <div class="translate">
    <HeaderBack text="Translate Menu"/>

    <div class="translate__container container">
      <TranslationList
        header="Interface Language"
        :languages="interfaceLanguages"
      />

      <TranslationList
        header="Menu auto Translation"
        :languages="menuLanguages"
      />
    </div>

    <TranslationButtonsContainer>
      <Button>Don't translate</Button>
      <Button disabled>Save</Button>
    </TranslationButtonsContainer>
  </div>
</template>

<script>
  import HeaderBack from '../../components/headers/HeaderBack';
  import TranslationList from './containers/TranslationList';
  import TranslationButtonsContainer from './components/TranslationButtonsContainer';
  import Button from '../../components/Button';

  export default {
    name: 'Translate',
    components: {
      Button,
      TranslationButtonsContainer,
      TranslationList,
      HeaderBack
    },
    data () {
      return {
        interfaceLanguages: [
          'English',
          'Russian',
          'Arabic'
        ],
        menuLanguages: [
          'German',
          'Greek',
          'Hebrew'
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .translate {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    &__container {
      flex-grow: 1;
    }
  }
</style>
