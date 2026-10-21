import { nftHandlers } from './nft.handler'
import { categoryHandlers } from './categories.handler'
import { nftSingleHandler } from './nftSingle.handler'
import { authHandler } from './auth.handler'
import { checkoutHandlers } from './checkout.handler'

export const handlers = [
  ...nftHandlers,
  ...categoryHandlers,
  ...nftSingleHandler,
  ...authHandler,
  ...checkoutHandlers,
]
