<template>
  <SectionBase :description="t('secure-section.description')" background="blue">
    <template v-slot:title>
      <span>
        {{ t('secure-section.title') }}
      </span>
    </template>

    <template v-slot:content>
      <div class="flex flex-col items-center lg:flex-row">
        <OutOfBoundariesCard
          title="Sheikah"
          description="Choose Sheikah for a privacy-focused experience on Windows, macOS, and GNU/Linux, ideal for users who prioritize security and user-friendly interfaces."
          action="Download Sheikah"
        >
          <template v-slot:icon>
            <SheikahIcon class="icon"></SheikahIcon>
          </template>
        </OutOfBoundariesCard>

        <OutOfBoundariesCard
          title="myWitWallet"
          description="Opt for myWitWallet for instant transactions without the wait for synchronization, perfect for quick and easy sending and receiving of WIT."
          action="Download myWitWallet"
        >
          <template v-slot:icon>
            <MywitwalletIcon class="icon"></MywitwalletIcon>
          </template>
        </OutOfBoundariesCard>
      </div>
    </template>
  </SectionBase>
</template>

<script setup lang="ts">
import SheikahIcon from '@/assets/svg/sheikah.svg?component'
import MywitwalletIcon from '@/assets/svg/mywitwallet.svg?component'
import { URLS } from '@/constants'

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
    url: URLS.data_feeds_explorer,
  },
  {
    title: t('explore.explorer-2.title'),
    description: t('explore.explorer-2.description'),
    url: URLS.block_explorer,
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

</style>