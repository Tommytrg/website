<template>
  <SectionBase :description="t('secure-section.description')" background="black">
    <template v-slot:title>
      <span>{{ $t('community.title') }}</span>
    </template>

    <template v-slot:content>
    <div class="flex justify-center">
     <IconWithText class="grow" :text="$t('community.advocate-program')">
      <MegaphoneIcon class="icon" />
     </IconWithText>
     <IconWithText class="grow" :text="$t('community.grant-program')">
      <BadgeIcon class="icon" />
     </IconWithText>

    <!-- <a :href="URLS.advocateProgram">{{ $t('community.advocate-program') }}</a> -->
    <!-- <a :href="URLS.grantProgram">{{ $t('community.grant-program') }}</a> -->
    </div>
    </template>
  </SectionBase>
</template>

<script setup lang="ts">
const { t } = useI18n()
// import { URLS } from '@/constants'
import MegaphoneIcon from '@/assets/svg/megaphone.svg?component'
import BadgeIcon from '@/assets/svg/badge.svg?component'
</script>

<style scoped>
.icon {
  width: 45px;
  height: 45px;
}
</style>