<template>
  <PalmSectionBase background="black">
    <!-- <PalmBlueIcon class="col-start-1 col-span-1 palm"/> -->

    <div class="flex flex-col items-center">
      <div class="flex justify-center items-center mb-xl flex-col md:flex-row">
        <i18n-t
          keypath="coin.title.main"
          class="text-8xl font-bold text-white-50"
          tag="h3"
        >
          <span class="text-wit-blue-500">{{ $t('coin.title.mark') }}</span>
        </i18n-t>
        <p class="mx-xl line transform rotate-90 md:transform-none"></p>
        <div class="max-w-md">
          <h4 class="text-4xl font-bold text-white-50 mb-md">
            {{ $t('coin.description1') }}
          </h4>
          <p class="text-lg text-white-50">{{ $t('coin.description2') }}</p>
          <p class="text-lg text-white-50">{{ $t('coin.description3') }}</p>
        </div>
      </div>

      <CustomButton :type="ButtonType.primary" class="mb-md">
        Run a Witnet Node and Stake on Windows
      </CustomButton>

      <p class="text-lg text-wit-blue-500 mb-lg">Windows • x86_64 • 14.8 MB ⓘ</p>

      <p class="text-large text-white-50 text-center max-w-4xl mb-xl">
        To participate in the Witnet network, run a Witnet node and stake some
        $WIT. Stakers can earn rewards while contributing to data retrieval,
        verification, and network security!
      </p>

      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col items-center my-xl md:my-0 md:mr-xl">
          <DockerIcon class="icon mb-md" />
          <p class="text-sm">Docker</p>
        </div>

        <div class="flex flex-col items-center mb-xl md:mb-none md:mr-xl ">
          <WindowsIcon  class="icon mb-md" />
          <p class="text-sm">Docker</p>
        </div>

        <div class="flex flex-col items-center mb-xl md:mb-none md:mr-xl">
          <AppleIcon class="icon mb-md" />
          <p class="text-sm">Docker</p>
        </div>

        <div class="flex flex-col items-center mb-xl md:mb-none md:mr-xl">
          <LinuxIcon class="icon mb-md" />
          <p class="text-sm">Docker</p>
        </div>

        <div class="flex flex-col items-center mb-xl md:mb-none md:mr-xl">
          <RaspberryIcon class="icon mb-md" />
          <p class="text-sm">Docker</p>
        </div>
      </div>

      <div class="flex justify-center flex-col 2xl:flex-row">
        <ExplorerLink
          v-for="explorer in explorers"
          class="mb-md 2xl:mr-md"
          shadow-color="blue"
          :key="explorer.title"
          :title="explorer.title"
          :description="explorer.description"
          :url="explorer.url"
        />
      </div>
      <!-- <div>
      <CustomButton :type="ButtonType.primary">Stake</CustomButton>
      <CustomButton :type="ButtonType.secondary">Buy</CustomButton>
    </div> -->
    </div>
  </PalmSectionBase>
</template>

<script setup lang="ts">
// import { URLS } from '@/constants'
import DockerIcon from '@/assets/svg/docker.svg?component'
import WindowsIcon from '@/assets/svg/windows.svg?component'
import AppleIcon from '@/assets/svg/apple.svg?component'
import LinuxIcon from '@/assets/svg/linux.svg?component'
import RaspberryIcon from '@/assets/svg/raspberry.svg?component'

import { ButtonType } from '~/types'
// const { t } = useI18n()
type Explorer = {
  title: string
  description: string
  url: string
}
const explorers: Array<Explorer> = [
  {
    title: 'Get Started',
    description: 'Start Staking Now and earn rewards!',
    url: '',
  },
  {
    title: 'Tutorials',
    description:
      'Learn the basics about taking with the comprehensive tutorials!',
    url: '',
  },
  {
    title: 'Contribute',
    description:
      'Help make Witnet even better. Submit code, examples, libraries, or help us fix bugs.',
    url: '',
  },
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
