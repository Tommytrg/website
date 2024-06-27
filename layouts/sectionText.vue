<template>
<div class="flex flex-col">
  <div class="flex flex-col items-center">

    <h2 v-if="headingType === 'h2'" class="title-h2 mb-lg">
        <slot name="title"></slot>
    </h2>

    <h3 v-if="headingType === 'h3'" class="title-h2 mb-lg">
        <slot name="title"></slot>
    </h3>

    <p class="text mb-lg max-w-2xl text-center">{{ description }}</p>
  </div>
    <slot name="content"></slot>
</div>
</template>

<script setip>
defineProps({
  description: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.dashes {
  width: 100px;
}
</style>