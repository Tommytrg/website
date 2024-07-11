<template>
  <div class="px-4">
    <div
      class="flex flex-col items-center gap-y-lg justify-items-center relative"
    >
      <DottedBg class="absolute z-0 h-2-md-y-screen max-h-[700px] w-auto" />

      <SquareDots class="squaredots1" />
      <Plus class="plus1" />
      <Zigzag class="zigzag1" />

      <Zigzag class="zigzag2" />
      <Plus class="plus2" />
      <SquareDots class="squaredots2" />

      <!-- <Plus class="absolute right-xl top-[300px] z-10" /> -->
      <!-- <SquareDots class="absolute left-xl top-xl z-10" /> -->
      <!-- <Plus class="absolute right-xl top-[300px] z-10" /> -->
      <!-- <Zigzag class="absolute right-xl top-xl z-10 rotate-90" /> -->
      <!-- <SquareDots class="absolute right-xl bottom-xl z-10" /> -->
      <div class="max-w-c-3xl z-20">
        <i18n-t keypath="hero.title.main" class="title-h2 text-center mb-8" tag="h1">
          <span class="text-wit-blue-500">{{ $t('hero.title.gradient') }}</span>
        </i18n-t>

        <h2 class="text text-center">{{ $t('hero.description') }}</h2>
      </div>

      <CustomButton :type="ButtonType.primary" class="z-20">
        {{ $t('hero.action') }}
      </CustomButton>

      <ArrowDownIcon class="m-xl z-20" />
    </div>
  </div>
</template>

<script setup>
import { ButtonType } from '@/types'
import ArrowDownIcon from '@/assets/svg/arrow_down.svg?component'
import DottedBg from '@/assets/svg/dotted_background.svg?component'
import Plus from '@/assets/svg/plus.svg?component'
import Zigzag from '@/assets/svg/zigzag.svg?component'
import SquareDots from '@/assets/svg/square-dots.svg?component'
</script>

<style scoped lang="scss">
.squaredots1 {
  position: absolute;
  width: 30px;
  height: auto;
  top: -16px;
  left: 0px;
}

.plus1{
  position: absolute;
  width: 15px;
  height: auto;
  top: 150px;
  left: -10px;
}

.zigzag1 {
  position: absolute;
  width: 30px;
  height: auto;
  top: 500px;
  left: 15px;
}

.zigzag2 {
  position: absolute;
  width: 30px;
  height: auto;
  top: 30px;
  right: 0px;
}

.plus2 {
  position: absolute;
  width: 15px;
  height: auto;
  top: 130px;
  right: 0px;
}

.squaredots2 {
  position: absolute;
  width: 30px;
  height: auto;
  top: 500px;
  right: 16px;
}

@media (min-width: 640px) {
.squaredots1 {
  width: 50px;
  top: 1%;
  left: 5%;
}

.plus1{
  width: 30px;
  top: px;
  left: 7%;
}

.zigzag1 {
  width: 50px;
  top: 70%;
  left: 3%;
}

.zigzag2 {
  width: 50px;
  top: 30px;
  right: 10%;
}

.plus2 {
  width: 30px;
  top: 130px;
  right: 0px;
}

.squaredots2 {
  width: 60px;
  top: 500px;
  right: 16px;
}

}


</style>
