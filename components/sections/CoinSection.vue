<template>
  <div class="section grid grid-cols-[repeat(3,1fr)] items-center py-xl">
      <PalmBlueIcon class="col-start-1 col-span-1 palm"/>

    <div class="col-start-2 col-span-2">
      <div class=" flex items-center">
        <i18n-t keypath="coin.title.main" class="title-h1 text-white-50" tag="h3">
          <span class="text-wit-blue-500">{{ $t('coin.title.mark') }}</span>
        </i18n-t>
        <p class="mx-xl line"></p>
        <div class="max-w-md">
          <h4 class="title-h3 text-white-50 mb-md">{{ $t('coin.description1') }}</h4>
          <p class="text text-white-50">{{ $t('coin.description2') }}</p>
          <p class="text text-white-50">{{ $t('coin.description3') }}</p>
        </div>
      </div>
      
      <CustomButton :type="ButtonType.primary">
        Run a Witnet Node and Stake on Windows
      </CustomButton>

      <p>Windows • x86_64 • 14.8 MB  ⓘ</p>

      <p>To participate in the Witnet network, run a Witnet node and stake some $WIT. Stakers can earn rewards while contributing to data retrieval, verification, and network security!</p>

  
    <div class="flex mt-xl">
      <DockerIcon class="iron mr-sm"/>
      <WindowsIcon class="icon mr-sm"/>
      <AppleIcon class="icon mr-sm"/>
      <LinuxIcon class="icon mr-sm"/>
      <RaspberryIcon class="icon mr-sm"/>
      <!-- TODO: center -->
    </div>
    <div class="flex">
      <ExplorerLink
        v-for="explorer in explorers"
        :key="explorer.title"
        :title="explorer.title"
        :description="explorer.description"
        :url="explorer.url"
      />
    </div>
    </div>
    <!-- <div>
      <CustomButton :type="ButtonType.primary">Stake</CustomButton>
      <CustomButton :type="ButtonType.secondary">Buy</CustomButton>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import { URLS } from '@/constants'
import DockerIcon from '@/assets/svg/docker.svg?component'
import WindowsIcon from '@/assets/svg/windows.svg?component'
import AppleIcon from '@/assets/svg/apple.svg?component'
import LinuxIcon from '@/assets/svg/linux.svg?component'
import RaspberryIcon from '@/assets/svg/raspberry.svg?component'


import { ButtonType } from '~/types';
// const { t } = useI18n()
type Explorer = {
  title: string
  description: string
  url: string
}
const explorers: Array<Explorer> = [
  {
    title: "Get Started",
    description: "Start Staking Now and earn rewards!",
    url: ''
  },
  {
    title: "Tutorials",
    description: "Learn the basics about taking with the comprehensive tutorials!",
    url: ''
  },
  {
    title: "Contribute",
    description: "Help make Witnet even better. Submit code, examples, libraries, or help us fix bugs.",
    url: ''
  }
  // {
  //   title: t('coin.explorer-1.title'),
  //   description: t('coin.explorer-1.description'),
  //   url: URLS.dataFeedsExplorer,
  // },
  // {
  //   title: t('coin.explorer-2.title'),
  //   description: t('explore.explorer-2.description'),
  //   url: URLS.blockExplorer,
  // },
]

</script>

<style scoped lang="scss">
.palm {
  /* position: ; */
}

.title-h3 {
  line-height: 1;
}

.section {
  background-color: black;
  color: white;
}

.line {
  border: 2px solid $blue;
  height: 150px;
}

</style>
