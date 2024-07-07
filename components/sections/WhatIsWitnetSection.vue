<template>
  <SectionBase
    :separator="true"
    headingType="h2"
    :description="$t('what-is-witnet.description')"
    background="blue"
  >
    <template v-slot:title>
      <i18n-t
        keypath="what-is-witnet.title.main"
        class="text-4xl sm:text-5xl lg:text-6xl text-white text-center font-normal"
        tag="span"
      >
        <span class="font-bold">
          <br />
          {{ $t('what-is-witnet.title.witnet') }}</span>
      </i18n-t>
    </template>

    <template v-slot:content>
      <div
        class="flex content-center items-center justify-center flex-row mt-lg"
      >
        <CircleIcon
          class="relative z-10 w-10 h-auto top-5 left-5 sm:w-20 sm:top-7 sm:left-7"
        />
        <BashIcon class="z-20 mr-sm w-10 h-auto sm:w-20" />
        <StorageIcon class="z-20 mr-sm w-10 h-auto sm:w-20" />
        <SlashIcon class="z-20 mr-sm w-10 h-auto sm:w-20" />
        <LockIcon class="z-20 mr-sm w-10 h-auto sm:w-20" />
        <BulbIcon class="z-20 mr-sm w-10 h-auto sm:w-20" />
        <KeyIcon class="z-20 mr-sm w-10 h-auto sm:w-20" />
      </div>
    </template>
  </SectionBase>
</template>

<script setup>
import BashIcon from '@/assets/svg/bash.svg?component'
import StorageIcon from '@/assets/svg/storage.svg?component'
import SlashIcon from '@/assets/svg/slash.svg?component'
import LockIcon from '@/assets/svg/lock.svg?component'
import BulbIcon from '@/assets/svg/bulb.svg?component'
import KeyIcon from '@/assets/svg/key.svg?component'
import CircleIcon from '@/assets/svg/circle.svg?component'
</script>

<style scoped lang="scss">
.icon {
  z-index: 2;
}

.left-circle {
  position: relative;
  z-index: 1;
}
</style>
