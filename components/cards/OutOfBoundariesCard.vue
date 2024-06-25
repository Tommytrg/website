<template>
  <div class="out-of-boundaries card border-2 border-black-950 bg-white-50 rounded-lg px-xl py-lg max-w-sm">
        <RoundedIcon class="rounded-icon">
            <SheikahIcon class="icon"></SheikahIcon>
        </RoundedIcon>
    <h3 class="title-h4 px-xl">Sheikah</h3>
    <hr class="hr my-md ml-xl">
    <p class="text mb-xl">Choose Sheikah for a privacy-focused experience on Windows, macOS, and GNU/Linux, ideal for users who prioritize security and user-friendly interfaces.</p>

    <div class="flex items-center">
        <SlashesIcon class="slashes"></SlashesIcon>
        <ArrowButton class="action">Download Sheikah</ArrowButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import SheikahIcon from '@/assets/svg/sheikah.svg?component'
import SlashesIcon from '@/assets/svg/slashes.svg?component'

// const props = defineProps({
//   index: {
//     type: Number,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// })

// const formattedIndex = computed(() => {
// return props.index.toLocaleString('en-US', {
//     minimumIntegerDigits: 2,
//     useGrouping: false
//   })
// })
</script>

<style scoped lang="scss">
.out-of-boundaries {
    // add margin equal to out of boundaries 
    margin: 25px 35px 25px 25px;
}

.rounded-icon {
    position: absolute;
  top: -25px;
  left: -25px;
}

.slashes {}
.action {
   position: absolute;
   right: -35px;
}

.icon {
    width: 75px;
    height: 75px;
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
  background-color: black;  /* Modern Browsers */
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