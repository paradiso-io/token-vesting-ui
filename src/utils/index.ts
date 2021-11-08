import Web3 from 'web3'
import { AbiItem, hexToAscii } from 'web3-utils'
import { Contract } from 'web3-eth-contract'
import BigNumber from 'bignumber.js'

export const getContract = (address: string, abi: AbiItem, web3: Web3): Contract | null => {
  try {
    // @ts-ignore
    return new web3.eth.Contract(abi, address)
  } catch (error: any) {
    console.error('Failed to get contract', error)
    return null
  }
}

export const toWei = (number: string | number, decimals?: number): BigNumber => {
  const _decimals = decimals ?? 18
  const result = new BigNumber(number).multipliedBy(new BigNumber(1 * 10 ** _decimals))
  return result
}

export const fromWei = (number: string | number, decimals?: number): BigNumber => {
  const _decimals = decimals ?? 18
  const result = new BigNumber(number).div(new BigNumber(1 * 10 ** _decimals))
  return result
}

export const formatNumber = (number: number | string): string => {
  const seps = number.toString().split('.')
  seps[0] = seps[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return seps.join('.')
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const decodeNFTFeatures = (features: any): { name: string; value: string }[] => {
  const names = features[0]
  const values = features[1]
  const featureDetails: { name: string; value: string }[] = []

  for (let i = 0; i < names.length; i++) {
    if (featureDetails.findIndex(f => f.name === hexToAscii(names[i])) < 0) {
      featureDetails.push({
        name: hexToAscii(names[i]),
        value: hexToAscii(values[i]),
      })
    }
  }

  return featureDetails
}
