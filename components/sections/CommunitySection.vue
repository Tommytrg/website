<template>
  <div class="bg-black-950">
    <h2 class="title-h2 text-white-50">{{ $t('community.title') }}</h2>
    <p>{{ $t('community.description') }}</p>

    <div class="flex">
     <IconWithText :text="$t('community.advocate-program')">
      <MegaphoneIcon />
     </IconWithText>
     <IconWithText :text="$t('community.grant-program')">
      <BadgeIcon />
     </IconWithText>

    <!-- <a :href="URLS.advocateProgram">{{ $t('community.advocate-program') }}</a> -->
    <!-- <a :href="URLS.grantProgram">{{ $t('community.grant-program') }}</a> -->
    </div>

  </div>
</template>

<script setup lang="ts">
// import { URLS } from '@/constants'
import MegaphoneIcon from '@/assets/svg/megaphone.svg?component'
import BadgeIcon from '@/assets/svg/badge.svg?component'
</script>
