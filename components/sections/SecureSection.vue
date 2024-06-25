<template>
  <SectionBase :description="t('secure-section.description')" background="blue">
    <template v-slot:title>
      <span>
        {{ t('secure-section.title') }}
      </span>
    </template>

    <template v-slot:content>
      <div>
        <OutOfBoundariesCard></OutOfBoundariesCard>
      </div>
    </template>
  </SectionBase>
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