import { nftHandlers } from './nft.handler'
import { categoryHandlers } from './categories.handler'
import { nftSingleHandler } from './nftSingle.handler'

export const handlers = [
  ...nftHandlers,
  ...categoryHandlers,
  ...nftSingleHandler,
]
