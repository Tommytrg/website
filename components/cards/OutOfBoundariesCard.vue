<template>
  <div
    class="out-of-boundaries card border-2 border-black-950 bg-white-50 rounded-lg px-xl py-xl max-w-sm"
  >
    <RoundedIcon class="rounded-icon">
      <slot name="icon"></slot>
    </RoundedIcon>
    <h3 class="text-2xl text-black-950 font-semibold leading-4 px-14">
      {{ title }}
    </h3>
    <hr class="hr my-md ml-14" />
    <p class="text-base text-black-950 mb-xl">
      {{ description }}
    </p>

    <div class="flex items-center">
      <SlashesIcon class="slashes h-4 w-20"></SlashesIcon>
      <ArrowButton class="action">{{ action }}</ArrowButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import SlashesIcon from '@/assets/svg/slashes.svg?component'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
:slotted(svg) {
  width: 75px;
  height: 75px;
}
.out-of-boundaries {
  // add margin equal to out of boundaries
  margin: 25px 60px 25px 25px;
}

.rounded-icon {
  position: absolute;
  top: -25px;
  left: -25px;
}

.action {
  position: absolute;
  right: -60px;
}

.card {
  box-shadow: 7px 10px 0px rgb(0, 0, 0);
  position: relative;
}

.title-h2 {
  font-weight: bold;
}

.hr {
  height: 3px;
  background-color: black; /* Modern Browsers */
}

.circle {
  line-height: 1;
  font-size: 24px;
  height: 48px;
  min-width: 48px;
  align-content: center;
  text-align: center;
  background-color: $blue;
}
</style>
