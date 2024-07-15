<template>
  <div class="px-4 py-28">
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

      <div class="max-w-c-3xl z-20">
        <i18n-t
          keypath="hero.title.main"
          class="title-h2 text-center mb-8"
          tag="h1"
        >
          <span class="text-wit-blue-500">{{ $t('hero.title.gradient') }}</span>
        </i18n-t>

        <h2 class="text text-center">{{ $t('hero.description') }}</h2>
      </div>

      <CustomButton :type="ButtonType.primary" class="z-20 mb-28">
        {{ $t('hero.action') }}
      </CustomButton>

      <ArrowDownIcon class="scroll z-20" />
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

.plus1 {
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
  top: 10%;
  right: 1%;
}

.plus2 {
  position: absolute;
  width: 15px;
  height: auto;
  top: 25%;
  right: 0px;
}

.squaredots2 {
  position: absolute;
  width: 30px;
  height: auto;
  top: 80%;
  right: 10%;
}

.scroll {
  width: 40px;
  height: auto;
  animation: down 1s infinite alternate;
}

@keyframes down {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-30px);
  }
}

@media (min-width: 640px) {
  .squaredots1 {
    width: 50px;
    top: 1%;
    left: 5%;
  }

  .plus1 {
    width: 30px;
    top: 40%;
    left: 15%;
  }

  .zigzag1 {
    width: 50px;
    top: 70%;
    left: 3%;
  }

  .zigzag2 {
    width: 50px;
    top: 15%;
    right: 10%;
  }

  .plus2 {
    width: 30px;
    top: 45%;
    right: 0;
  }

  .squaredots2 {
    width: 60px;
    top: 70%;
    right: 15%;
  }
}
</style>
