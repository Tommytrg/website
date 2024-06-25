<template>
  <div class="!border-black section w-full flex justify-center p-xl">
  <div class="flex flex-col items-center">
    <h3 class="title-h1 mb-lg">{{ t('secure-section.title') }}</h3>

    <p class="description text mb-lg max-w-2xl text-center">{{ t('secure-section.description') }}</p>
    
    <div>
      <OutOfBoundariesCard></OutOfBoundariesCard>
    </div>
  </div>

  </div>
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

.content {
  max-width: 1100px;
}
</style>