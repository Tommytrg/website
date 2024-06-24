<template>
<div class="flex flex-col">
  <div class="flex flex-col items-center">
    <h3 class="title-h1 mb-lg">{{ t('buy-section.title') }}</h3>

    <p class="description text mb-lg max-w-2xl text-center">{{ t('buy-section.description') }}</p>
  </div>

  <div class="grid grid-cols-2 p-xl gap-xl">
    <!-- <h2 class="title-h2">{{ $t('build-section.title') }}</h2> -->

    <div class="flex items-center">
      <IconWithText v-for="exchange in exchanges" :text="exchange.text">  
        <GateIcon class="icon" v-if="exchange.logo ==='gate'"></GateIcon>
        <MexcIcon class="icon" v-if="exchange.logo ==='mexc'"></MexcIcon>
        <BitmartIcon class="icon" v-if="exchange.logo ==='bitmart'"></BitmartIcon>
        <ChangellyIcon class="icon" v-if="exchange.logo ==='changelly'"></ChangellyIcon>
        <SimpleswapIcon class="icon" v-if="exchange.logo ==='simpleswap'"></SimpleswapIcon>
        <LetsexchangeIcon class="icon" v-if="exchange.logo ==='letsexchange'"></LetsExchangeIcon>
      </IconWithText>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import GateIcon from '@/assets/svg/gate.svg?component'
import MexcIcon from '@/assets/svg/mexc.svg?component'
import BitmartIcon from '@/assets/svg/bitmart.svg?component'
import ChangellyIcon from '@/assets/svg/changelly.svg?component'
import SimpleswapIcon from '@/assets/svg/simpleswap.svg?component'
import LetsexchangeIcon from '@/assets/svg/letsexchange.svg?component'

const { t } = useI18n()
type Reason = {
  title: string
  description: string
}
const exchanges: Array<any> = [
  {
    name: t('buy-section.exchanges.gate'),
    logo: 'gate'
  },
  {
    name: t('buy-section.exchanges.mexc'),
    logo: 'mexc'
  },
  {
    name: t('buy-section.exchanges.bitmart'),
    logo: 'bitmart'
  },
  {
    name: t('buy-section.exchanges.changelly'),
    logo: 'changelly'
  },
  {
    name: t('buy-section.exchanges.singleswap'),
    logo: 'simpleswap'
  },
  {
    name: t('buy-section.exchanges.letsexchange'),
    logo: 'letsexchange'
  }
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