<template>
  <SectionBase :description="t('buy-section.description')">
    <template v-slot:title>
      <span>
        {{ t('buy-section.title') }}
      </span>
    </template>

    <template v-slot:content>
      <div class="grid grid-cols-3 p-xl gap-xl">

        <!-- <div class="flex items-center"> -->
          <IconWithText v-for="exchange in exchanges" :text="exchange.name">
            <GateIcon class="icon" v-if="exchange.logo === 'gate'"></GateIcon>
            <MexcIcon class="icon" v-if="exchange.logo === 'mexc'"></MexcIcon>
            <BitmartIcon
              class="icon"
              v-if="exchange.logo === 'bitmart'"
            ></BitmartIcon>
            <ChangellyIcon
              class="icon"
              v-if="exchange.logo === 'changelly'"
            ></ChangellyIcon>
            <SimpleswapIcon
              class="icon"
              v-if="exchange.logo === 'simpleswap'"
            ></SimpleswapIcon>
            <LetsexchangeIcon
              class="icon"
              v-if="exchange.logo === 'letsexchange'"
            ></LetsexchangeIcon>
          </IconWithText>
      </div>
    </template>
  </SectionBase>
</template>

<script setup lang="ts">
import GateIcon from '@/assets/svg/gate.svg?component'
import MexcIcon from '@/assets/svg/mexc.svg?component'
import BitmartIcon from '@/assets/svg/bitmart.svg?component'
import ChangellyIcon from '@/assets/svg/changelly.svg?component'
import SimpleswapIcon from '@/assets/svg/simpleswap.svg?component'
import LetsexchangeIcon from '@/assets/svg/letsexchange.svg?component'

const { t } = useI18n()
const exchanges: Array<any> = [
  {
    name: t('buy-section.exchanges.gate'),
    logo: 'gate',
  },
  {
    name: t('buy-section.exchanges.mexc'),
    logo: 'mexc',
  },
  {
    name: t('buy-section.exchanges.bitmart'),
    logo: 'bitmart',
  },
  {
    name: t('buy-section.exchanges.changelly'),
    logo: 'changelly',
  },
  {
    name: t('buy-section.exchanges.simpleswap'),
    logo: 'simpleswap',
  },
  {
    name: t('buy-section.exchanges.letsexchange'),
    logo: 'letsexchange',
  },
]
</script>

<style scoped lang="scss">
.blue {
  color: $blue;
}
.icon {
  width: 50px;
  height: 50px;
}
</style>
