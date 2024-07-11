import { localeCodes, type LanguageDictionary } from './types'

export const URLS: Record<string, string> = {
  // community: 'https://witnet.io/#community',
  ado: 'https://github.com/adoracles/',
  advocateProgram:
    'https://witnet.notion.site/The-Witnet-Advocate-Program-f572baff6b1d49a69d4db785a924fc61',
  angelList: 'https://angel.co/company/witnet-foundation-1',
  bitmart: 'https://www.bitmart.com/trade/en-US?symbol=WIT_USDT',
  block_explorer: 'https://witnet.network/',
  changelly: '',
  coin: '#coin',
  data_feeds_explorer: 'https://feeds.witnet.io',
  developers: '#',
  dfe: '#',
  discord: 'https://discord.gg/witnet',
  dockerNode: 'https://hub.docker.com/r/witnet/witnet-rust/tags',
  documentation: 'https://docs.witnet.io/',
  ecosystem: 'https://witnet.io/#ecosystem',
  fullNode: 'https://docs.witnet.io/try/run-a-node/',
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
  learn: '#',
  libraries: '#',
  linuxNode: 'https://github.com/witnet/witnet-rust/releases',
  macosNode: 'https://github.com/witnet/witnet-rust/releases',
  mediaKit:
    'https://drive.google.com/drive/u/1/folders/1z9dSts64xyaIZqRvniMPDib7UWOE2P3z',
  medium: 'https://medium.com/witnet',
  mexc: 'https://www.mexc.com/exchange/WIT_USDT',
  mining: 'https://docs.witnet.io/node-operators/docker-quick-start-guide',
  letsexchange: "https://letsexchange.io/coin/wit",
  my_wit_wallet: 'https://mywitwallet.com/',
  newsletter: 'http://eepurl.com/iDxYzs',
  oracle: '#oracle',
  priceFeeds: 'https://docs.witnet.io/smart-contracts/witnet-data-feeds',
  randomness: 'https://docs.witnet.io/smart-contracts/witnet-randomness-oracle',
  reddit: 'https://reddit.com/r/witnet',
  reference: '#',
  requestDataFeed: 'https://tally.so/r/wMZDAn',
  sheikah: '#',
  simpleSwap: 'https://simpleswap.io/coins/wit',
  stakeTutorial: '',
  telegram: 'https://t.me/witnetio',
  token: 'https://witnet.io/#coin',
  tokenomics:
    'https://medium.com/witnet/wit-witnet-blockchains-native-tokenomics-4559084073c5',
  tools: '#',
  truffleBox:
    'https://docs.witnet.io/smart-contracts/witnet-web-oracle/make-a-get-request',
  tutorials: '#',
  twitter: 'https://twitter.com/witnet_io',
  wallet: 'https://sheikah.app/',
  whitepaper: 'https://witnet.io/witnet-whitepaper.pdf',
  windowsNode: 'https://github.com/witnet/witnet-rust/releases',
  x: 'https://twitter.com/witnet_io',
  youtube: 'https://www.youtube.com/channel/UCCS143kLVAH7oHZKvNNNxKQ',
  rasberrypiNode: 'https://github.com/witnet/witnet-rust/releases',
  witnet_foundation: 'https://witnet.foundation',
}

export const languageLocales: LanguageDictionary = {
  [localeCodes.en]: {
    code: 'en-US',
    iso: 'en-US',
    name: 'English(US)',
    file: 'en-US.json',
  },
  [localeCodes.es]: {
    code: 'es-ES',
    iso: 'es-ES',
    name: 'Español(ES)',
    file: 'es-ES.json',
  },
}
