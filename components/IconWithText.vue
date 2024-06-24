<template>
      <RoundedIcon class="mr-md">
        <slot></slot>
        <!-- <GateIcon /> -->
      </RoundedIcon>
      <p class="text">{{ text }}</p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
  },
})
</script>