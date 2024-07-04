<template>
  <CenteredSection background="blue">
    <div class="grid grid-cols-1 gap-8 2xl:grid-cols-3 justify-center justify-items-center md:justify-items-start">
      <div class="flex self-center sm:w-96 justify-self-center">
        <ArrowTurnRightIcon class="arrow m-md"/>
        <!-- <h2 class="title-h1 mr-sm">{{ $t('explore.title') }}</h2> -->

        <i18n-t keypath="explore.title.main" class="title-h2 font-bold mr-0 sm:mr-sm white" tag="h2">
          <span class="text-black-950">{{ $t('explore.title.witnet') }}</span>
        </i18n-t>
      </div>
     
      <div class="flex flex-col md:flex-row">
        <ExplorerLink
          v-for="explorer in explorers"
          class="m-sm min-w-80"
          shadow-color="black"
          :key="explorer.title"
          :title="explorer.title"
          :description="explorer.description"
          :url="explorer.url"
        />
      </div>
    </div>
  </CenteredSection>
</template>

<script setup lang="ts">
import { URLS } from '@/constants'
import ArrowTurnRightIcon from '@/assets/svg/arrow_turn_right.svg?component'

const { t } = useI18n()
type Explorer = {
  title: string
  description: string
  url: string
}
const explorers: Array<Explorer> = [
  {
    title: t('explore.explorer-1.title'),
    description: t('explore.explorer-1.description'),
    url: URLS.dataFeedsExplorer,
  },
  {
    title: t('explore.explorer-2.title'),
    description: t('explore.explorer-2.description'),
    url: URLS.blockExplorer,
  },
]
</script>

<style scoped>
.text-7xl {
  line-height: 1;
}

.white {
  color: white;
}

.arrow {
  width: 90px
}

.title-h1 {
  color: white;
}

.section {
  background: #00E2ED;
}
</style>