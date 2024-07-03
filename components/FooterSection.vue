<template>
  <CenteredSection background="black">
    <div class="text-white-50 flex justify-center">
      <div class="footer p-4">
        <div class="top grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-between border-b border-white-50 pb-10 gap-x-10 gap-y-7">
          <div
            v-for="section in footerLinks"
            :key="section.title"
            class="py-2 flex flex-col"
          >
            <p class="title font-bold text-sm">
              {{ $t(`footer.links.${section.title}.title`) }}
            </p>
            <a
              v-for="link in section.links"
              :key="link.text"
              class="py-1 text-sm"
              :href="link.url"
              target="_blank"
            >
              {{ $t(link.text) }}
            </a>
          </div>
          <div class="text-sm col-span-3">
            <AdoIcon class="mb-2 w-14" />
            <i18n-t keypath="footer.ado_text" tag="p" class="text-sm">
              <a
                class="py-1 underline text-sm"
                :href="urls.ado"
                target="_blank"
              >
                theado.org
              </a>
            </i18n-t>
          </div>
        </div>
        <div class="flex items-center gap-4 pt-10">
          <Wit2Icon class="w-2xl white" name="witnet_dark" />
          <div>
          <i18n-t keypath="footer.copyright.base1" class="copyright max-w-100 text-sm" tag="p">
            <span>2018-{{ new Date().getFullYear() }}</span>
            <a
              class="underline py-1 text-sm"
              href="https://witnet.foundation"
              target="_blank"
              >{{ $t('footer.copyright.witnet_foundation') }}</a
            >
            <a
              class="underline py-1 text-sm"
              href="https://creativecommons.org/publicdomain/zero/1.0/"
              target="_blank"
              >{{ $t('footer.copyright.license') }}</a
            >
          </i18n-t>
          <i18n-t keypath="footer.copyright.base2" class="copyright max-w-100 text-sm" tag="p">
            <a
              class="underline py-1 text-sm"
              href="https://creativecommons.org/publicdomain/zero/1.0/"
              target="_blank"
              >{{ $t('footer.copyright.license') }}</a
            >
          </i18n-t>
          </div>
        </div>
      </div>
    </div>
  </CenteredSection>
</template>

<script setup>
import AdoIcon from '@/assets/svg/ado.svg?component'
import Wit2Icon from '@/assets/svg/wit2.svg?component'

const footerSections = {
  developers: ['reference', 'libraries', 'tools'],
  ecosystem: [
    'block_explorer',
    'data_feeds_explorer',
    'sheikah',
    'my_wit_wallet',
  ],
  learn: ['whitepaper', 'medium', 'tutorials'],
  // community: ['telegram', 'discord', 'x', 'reddit', 'youtube'],
}

const urls = {
  developers: '#',
  ecosystem: '#',
  learn: '#',
  // community: '#',
  reference: '#',
  libraries: '#',
  tools: '#',
  reference: '#',
  libraries: '#',
  tools: '#',
  block_explorer: '#',
  dfe: '#',
  sheikah: '#',
  mww: '#',
  whitepaper: '#',
  medium: '#',
  tutorials: '#',
  telegram: '#',
  discord: '#',
  x: '#',
  reddit: '#',
  youtube: '#',
  ado: 'https://github.com/adoracles/',
  advocateProgram:
    'https://witnet.notion.site/The-Witnet-Advocate-Program-f572baff6b1d49a69d4db785a924fc61',
  angelList: 'https://angel.co/company/witnet-foundation-1',
  blockExplorer: 'https://witnet.network/',
  coin: '#coin',
  // community: 'https://witnet.io/#community',
  data_feeds_explorer: 'https://feeds.witnet.io',
  discord: 'https://discord.gg/witnet',
  documentation: 'https://docs.witnet.io/',
  ecosystem: 'https://witnet.io/#ecosystem',
  fullNode: 'https://docs.witnet.io/try/run-a-node/',
  mediaKit:
    'https://drive.google.com/drive/u/1/folders/1z9dSts64xyaIZqRvniMPDib7UWOE2P3z',
  gate: 'https://www.gate.io/trade/WIT_USDT',
  getPostRequest:
    'https://docs.witnet.io/smart-contracts/apis-and-http-get-post-oracle',
  github: 'https://github.com/witnet',
  grantProgram:
    'https://witnet.notion.site/The-Witnet-Grant-Program-0e6bc5ddbe4a4bf8a22c262dedfe268f',
  integrateDirectly:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/using-witnet-data-feeds#reading-last-price-and-timestamp-from-a-price-feed-contract-serving-a-specific-pair',
  integrateThroughProxy:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/using-witnet-data-feeds#reading-multiple-currency-pairs-from-the-router',
  medium: 'https://medium.com/witnet',
  mexc: 'https://www.mexc.com/exchange/WIT_USDT',
  mining: 'https://docs.witnet.io/node-operators/docker-quick-start-guide',
  oracle: '#oracle',
  priceFeeds: 'https://docs.witnet.io/smart-contracts/witnet-data-feeds',
  randomness: 'https://docs.witnet.io/smart-contracts/witnet-randomness-oracle',
  reddit: 'https://reddit.com/r/witnet',
  requestDataFeed: 'https://tally.so/r/wMZDAn',
  telegram: 'https://t.me/witnetio',
  token: 'https://witnet.io/#coin',
  tokenomics:
    'https://medium.com/witnet/wit-witnet-blockchains-native-tokenomics-4559084073c5',
  truffleBox:
    'https://docs.witnet.io/smart-contracts/witnet-web-oracle/make-a-get-request',
  x: 'https://twitter.com/witnet_io',
  wallet: 'https://sheikah.app/',
  whitepaper: 'https://witnet.io/witnet-whitepaper.pdf',
  youtube: 'https://www.youtube.com/channel/UCCS143kLVAH7oHZKvNNNxKQ',
  my_wit_wallet: 'https://mywitwallet.com/',
}

import snakeCase from 'lodash.snakecase'

function getFooterLinks(sections) {
  return Object.entries(sections).map(([sectionName, sectionItems]) => ({
    title: sectionName,
    links: sectionItems.map((sectionItem) => ({
      url: urls[sectionItem],
      text: getI18nStringFromSectionItem(sectionName, sectionItem),
    })),
  }))
}

function getI18nStringFromSectionItem(sectionName, sectionItem) {
  return `footer.links.${sectionName}.${snakeCase(sectionItem)}`
}

const footerLinks = getFooterLinks(footerSections)
</script>

<style scoped lang="scss">
  // .bottom {
  //   grid-template-columns: max-content 1fr;
  //   grid-template-rows: max-content;
  //   .copyright {
  //     grid-row: 2;
  //     grid-column: 2;
  //   }
  //   .logo {
  //     grid-row: 2;
  //     grid-column: 1;
  //   }
  // }

// @media (min-width: 600px) {
//   .bottom {
//     grid-template-columns: max-content 1fr max-content;
//   }
// }
</style>
