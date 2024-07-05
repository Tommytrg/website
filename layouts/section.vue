<template>
  <div :class="fullBackground ? `wide-section ${height}` : `section ${height}`">
    <div
      v-if="fullBackground"
      class="section w-full px-12 my-0 mx-auto max-w-2xl"
      :style="{ background: backgroundColor }"
    >
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  // TODO: Improve naming and try to allow receive css variables
  props: {
    fullBackground: {
      type: Boolean,
    },
    backgroundColor: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: "",
    },
  },
}
</script>

<style scoped>
.section {
  /* max-width: 1100px; */
}

.wide-section {
  /* width: 100%; */
}

@media (max-width: 350px) {
  .section {
    /* padding: 32px 16px; */
  }
}
</style>
