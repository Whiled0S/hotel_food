<template>
  <div class="translate">
    <BackHeader text="Translate Menu"/>

    <div class="translate__container container">
      <TranslationList
        header="Interface Language"
      >
        <TranslationListItem
          v-for="(language, index) in interfaceLanguages"
          :key="index"
          :text="language"
        />
      </TranslationList>

      <TranslationList
        header="Menu auto Translation"
      >
        <TranslationListItem
          v-for="(language, index) in menuLanguages"
          :key="index"
          :text="language"
        />
      </TranslationList>
    </div>

    <TranslationButtonsContainer>
      <Button>Don't translate</Button>
      <Button disabled>Save</Button>
    </TranslationButtonsContainer>
  </div>
</template>

<script>
  import BackHeader from '../components/BackHeader';
  import TranslationList from '../components/TranslationList';
  import TranslationListItem from '../components/TranslationListItem';
  import TranslationButtonsContainer from '../components/TranslationButtonsContainer';
  import Button from '../components/Button';

  export default {
    name: 'Translate',
    components: { Button, TranslationButtonsContainer, TranslationListItem, TranslationList, BackHeader },
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
