import { ChainId } from '@googolpot/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: '0x54dE0E6EfC01bbF96B93DC526C515D42e53E38BC'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
