// @ts-check
import { etherscan, fs } from '@wagmi/cli'

const apiKey = 'MK9NWF5JSK6JPWDMVTIJF4RZ466VD2XEPZ'

/**
 * @type {import('@wagmi/cli').Config}
 **/
export default {
  contracts: [
    {
      address: '0xaf0326d92b97df1221759476b072abfd8084f9be',
      name: 'WagmiMintEtherscan',
      chainId: 1,
      source: etherscan({ apiKey }),
    },
    {
      address: '0xaf0326d92b97df1221759476b072abfd8084f9be',
      name: 'WagmiMintFs',
      chainId: 1,
      source: fs({ path: './src/contracts/wagmi.js' }),
    },
  ],
}