<template>
  <div
    class="w-full flex justify-center"
    :class="[backgroundClass, `background-${background}`]"
  >
    <div class="flex flex-col max-w-7xl">
      <div class="flex flex-col items-center">
        <h3 class="title title-h2 mb-md">
          <slot name="title"></slot>
        </h3>
        <p class="description text mb-lg max-w-2xl text-center">
          {{ description }}
        </p>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: false,
    default: 'white',
  },
})

const backgrounds = {
  white: 'bg-white-50',
  black: 'bg-black-950',
  blue: 'bg-wit-blue-500',
}

const backgroundClass = backgrounds[props.background]
</script>

<style lang="scss">
.background-white {
  .title {
    color: black;
  }

  .description {
    color: black;
  }
}

.background-blue {
  .title {
    color: black;
  }
  .description {
    color: black;
  }
}

.background-black {
  .title {
    color: white;
  }
  .description {
    color: white;
  }
}
</style>
