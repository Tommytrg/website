<template>
  <div>
    <PlatformLink
      v-for="platform in platforms"
      :key="platform.name"
      :name="platform.name"
      :url="platform.url"
      :icon="platform.icon"
    />
  </div>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import icon from '@/assets/svg/flag-eeuu.svg?component'
import { URLS } from '@/constants'

type Platform = {
  name: string
  url: string
  icon: FunctionalComponent
}
const platforms: Array<Platform> = [
  {
    name: 'Docker',
    url: URLS.docker_node,
    icon,
  },
  {
    name: 'Windows',
    url: URLS.windows_node,
    icon,
  },
  {
    name: 'macOS',
    url: URLS.macos_node,
    icon,
  },
  {
    name: 'GNU/Linux',
    url: URLS.linux_node,
    icon,
  },
  {
    name: 'Rasberry Pi',
    url: URLS.rasberrypi_node,
    icon,
  },
]
</script>
