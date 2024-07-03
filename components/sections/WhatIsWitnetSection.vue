<template>
  <SectionBase :separator="true" headingType="h2" :description="$t('what-is-witnet.description')" background="blue">
    <template v-slot:title>
     <i18n-t keypath="what-is-witnet.title.main" class=" text-4xl sm:text-5xl lg:text-6xl text-white text-center" tag="span">
        <span class="black block">{{ $t('what-is-witnet.title.witnet') }}</span>
      </i18n-t>
    </template>

    <template v-slot:content>
      <div class="flex content-center items-center flex-col md:flex-row md:mt-lg  mt-0 ">
        <CircleIcon class="left-circle"/>
        <BashIcon class="icon mr-sm"/>
        <StorageIcon class="icon mr-sm"/>
        <SlashIcon class="icon mr-sm"/>
        <LockIcon class="icon mr-sm"/>
        <BulbIcon class="icon mr-sm"/>
        <KeyIcon class="icon"/>
        <!-- TODO: center -->
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
  width: 90px;
}

.left-circle {
  width: 100px;
  height: 100px;
  position: relative;
  top: 30px;
  left: 30px;
  z-index: 1;
}

.right-circle {
  width: 100px;
  position: relative;
  bottom: 30px;
  right: 30px;
  z-index: 1;
}

.section {
  background-color: #00E2ED;
}

.text-white {
  color: white;
}

.text-black{
  color: black;
}

.title-h2 {
  max-width: 475px;
}
.text {
  max-width: 700px;
  margin-bottom: 48px;
}

.black {
  color: $black;
}

// @media only screen and (max-width: 800px) {
//   .icon {
//     z-index: 2;
//     width: 70px;
//   }
// }
// @media only screen and (max-width: 600px) {
//   .icon {
//     z-index: 2;
//     width: 60px;
//   }
// }

// @media only screen and (max-width: 400px) {
//   .icon {
//     z-index: 2;
//     width: 50px;
//   }
// }
</style>
