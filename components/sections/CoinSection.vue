<template>
  <PalmSectionBase background="black">
    <!-- <PalmBlueIcon class="col-start-1 col-span-1 palm"/> -->

    <div class="flex flex-col items-center">
      <div class="flex justify-center items-center mb-xl flex-col md:flex-row">
        <i18n-t
          keypath="coin.title.main"
          class="text-6xl sm:text-7xl lg:text-8xl font-bold text-white-50"
          id="stake"
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
        <!-- TODO: fix extra spacing using i18n-t -->
        <!-- <i18n-t
          keypath="coin.run_in_platform.main"
          class="flex flex-row text-white-50" tag="span">
          <span class="text-white-50">{{ $t('coin.run_in_platform.windows') }}</span>
        </i18n-t> -->

        Run a Witnet Node and Stake on {{ release.platform }} 
      </CustomButton>

      <p class="text-lg text-wit-blue-500 mb-lg">
        {{ release.platform }} • x86_64 • {{ size }} MB ⓘ
      </p>

      <p class="text-large text-white-50 text-center max-w-4xl mb-xl"></p>

      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col items-center my-xl md:my-0 md:mr-xl">
          <DockerIcon class="icon mb-md" />
          <p class="text-sm">Docker</p>
        </div>

        <div class="flex flex-col items-center mb-xl md:mb-none md:mr-xl">
          <WindowsIcon class="icon mb-md" />
          <p class="text-sm">Windows</p>
        </div>

        <div class="flex flex-col items-center mb-xl md:mb-none md:mr-xl">
          <AppleIcon class="icon mb-md" />
          <p class="text-sm">Apple</p>
        </div>

        <div class="flex flex-col items-center mb-xl md:mb-none md:mr-xl">
          <LinuxIcon class="icon mb-md" />
          <p class="text-sm">Docker</p>
        </div>

        <div class="flex flex-col items-center mb-xl md:mb-none md:mr-xl">
          <RaspberryIcon class="icon mb-md" />
          <p class="text-sm">Raspberry</p>
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
    </div>
  </PalmSectionBase>
</template>

<script setup lang="ts">
const { t } = useI18n()

// import { URLS } from '@/constants'
import DockerIcon from '@/assets/svg/docker.svg?component'
import WindowsIcon from '@/assets/svg/windows.svg?component'
import AppleIcon from '@/assets/svg/apple.svg?component'
import LinuxIcon from '@/assets/svg/linux.svg?component'
import RaspberryIcon from '@/assets/svg/raspberry.svg?component'

import { ButtonType } from '~/types'

import { getLatestRelease } from '../../utils/getLatestRelease'

const release = ref({
  platform: '',
  releaseUrl: '',
  size: 0 
})

const size = computed(() => {
  return (release.value.size / 1024 / 1024).toFixed(1)
})

onMounted(async () => {
  const latestRelease = await getLatestRelease(window.navigator)
  release.value = latestRelease
})

// const { t } = useI18n()
type Explorer = {
  title: string
  description: string
  url: string
}

// TODO: add urls
const explorers: Array<Explorer> = [
  {
    title: t('coin.cards.get_started.title'),
    description: t('coin.cards.get_started.description'),
    url: "",
  },
  {
    title: t('coin.cards.tutorials.title'),
    description: t('coin.cards.tutorials.description'),
    url: "",
  },
  {
    title: t('coin.cards.contribute.title'),
    description: t('coin.cards.contribute.description'),
    url: "",
  },
]
</script>

<style scoped lang="scss">
// .palm {
// }

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
