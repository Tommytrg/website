import { getBrowserOs } from './getBrowserOs'
export const URL_RELEASE_BASE =
  'https://api.github.com/repos/witnet/sheikah/releases/latest'

export async function getLatestRelease(navigator: any) {
  return await fetch(URL_RELEASE_BASE).then(async (result: any) => {
    const os = await getBrowserOs(navigator).toLowerCase()
    const macRelease = await result.data.assets.find((asset: any) =>
      asset.browser_download_url.includes('.dmg')
    )
    const linuxRelease = await result.data.assets.find((asset: any) =>
      asset.browser_download_url.includes('.AppImage')
    )
    const windowsRelease = await result.data.assets.find((asset: any) =>
      asset.browser_download_url.includes('.exe')
    )
    const release = {
      linux: {
        platform: 'GNU / Linux',
        releaseUrl: linuxRelease.browser_download_url,
        downloadName: linuxRelease.name,
      },
      win: {
        platform: 'Windows',
        releaseUrl: windowsRelease.browser_download_url,
        downloadName: windowsRelease.name,
      },
      mac: {
        platform: 'Mac OS',
        releaseUrl: macRelease.browser_download_url,
        downloadName: windowsRelease.name,
      },
    }
    return (release as any)[os] as any
  })
}