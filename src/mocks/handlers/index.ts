import { nftHandlers } from './nft.handler'
import { categoryHandlers } from './categories.handler'

export const handlers = [...nftHandlers, ...categoryHandlers]
