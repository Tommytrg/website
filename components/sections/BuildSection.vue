<template>
  <SectionBase :description="t('build-section.description')">
    <template #title>
      <i18n-t
        keypath="build-section.title.key_features"
        class="title-h2"
        tag="span"
        id="build"
      >
        <span class="text-wit-blue-500">{{ $t('build-section.title.dot') }}</span>
      </i18n-t>
    </template>

    <template #content>
      <div class="grid grid-cols-1 gap-sm lg:grid-cols-2">
        <BuildWithWitnet
          v-for="(reason, index) in reasons"
          :index="index + 1"
          :key="reason.title"
          :title="reason.title"
          :description="reason.description"
        />
      </div>
    </template>
  </SectionBase>
</template>

<script setup lang="ts">
const { t } = useI18n()
type Reason = {
  title: string
  description: string
}
const reasons: Array<Reason> = [
  {
    title: t('build-section.title-1'),
    description: t('build-section.description-1'),
  },
  {
    title: t('build-section.title-2'),
    description: t('build-section.description-2'),
  },
  {
    title: t('build-section.title-3'),
    description: t('build-section.description-3'),
  },
  {
    title: t('build-section.title-4'),
    description: t('build-section.description-4'),
  },
  {
    title: t('build-section.title-5'),
    description: t('build-section.description-5'),
  },
  {
    title: t('build-section.title-6'),
    description: t('build-section.description-6'),
  },
]
</script>

<style scoped lang="scss">
.blue {
  color: $blue;
}
</style>
