<template>
  <SectionLayout class="ecosystem-section">
    <i18n path="ecosystem.title.main" class="title header-2" tag="h1">
      <span class="gradient">{{ $t('ecosystem.title.gradient') }}</span>
    </i18n>
    <p class="ecosystem-subtitle subtitle">
      {{ $t('ecosystem.subtitle') }}
    </p>
    <div class="ecosystem-card-container">
      <EcosystemCard
        v-for="item in items"
        :key="item.title"
        :link="item.link"
        :title="item.title"
        :content="item.content"
        :src="item.src"
        :border="item.border"
      />
    </div>
  </SectionLayout>
</template>

<script>
import { urls } from '../constants'

export default {
  data() {
    return {
      items: [
        {
          title: this.$t('ecosystem.cards.node.title'),
          src: require('@/assets/images/witnet-rust.svg'),
          link: urls.mining,
          border: false,
          content: this.$t('ecosystem.cards.node.content'),
        },
        {
          title: this.$t('ecosystem.cards.sheikah.title'),
          src: require('@/assets/images/sheikah.svg'),
          link: urls.sheikah,
          border: false,
          content: this.$t('ecosystem.cards.sheikah.content'),
        },
        {
          title: this.$t('ecosystem.cards.truffle_box.title'),
          src: require('@/assets/images/truffle-box.svg'),
          link: urls.truffleBox,
          border: false,
          content: this.$t('ecosystem.cards.truffle_box.content'),
        },
        {
          title: this.$t('ecosystem.cards.explorer.title'),
          src: require('@/assets/images/block-explorer.svg'),
          link: urls.blockExplorer,
          border: false,
          content: this.$t('ecosystem.cards.explorer.content'),
        },
        // TODO: Add item when the witnet.live monitor is ready
        // {
        //   title: this.$t('ecosystem.cards.monitor.title'),
        //   src: require('@/assets/images/network-monitor.svg'),
        //   border: false,
        //   content: this.$t('ecosystem.cards.monitor.content'),
        // },
        {
          title: this.$t('ecosystem.cards.next.title'),
          src: require('@/assets/images/question_mark.svg'),
          link: urls.docs,
          border: true,
          content: this.$t('ecosystem.cards.next.content'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.ecosystem-section {
  text-align: justify;
  .title {
    margin-bottom: 16px;
    text-align: center;
    .gradient {
      background: linear-gradient(90deg, $pink 43%, $electric-blue 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .ecosystem-subtitle {
    padding-bottom: 16px;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    font-weight: lighter;
  }
  .ecosystem-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 24px;
    column-gap: 56px;
    justify-items: center;
    margin-bottom: 25px;
    margin-top: 50px;
  }
}

@media (max-width: 690px) {
  .ecosystem-section {
    text-align: justify;
    .title {
      margin-bottom: 16px;
      text-align: center;
      .gradient {
        background: linear-gradient(
          90deg,
          $pink 0%,
          $pink 43%,
          $electric-blue 100%
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
    }
    .ecosystem-subtitle {
      padding-bottom: 40px;
      text-align: center;
      max-width: 500px;
      margin: 0 auto;
    }
    .ecosystem-card-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      row-gap: 0;
      column-gap: 25px;
      justify-items: center;
    }
  }
}
</style>
