import { PurchaseError } from '#/errors/authErros'
import type { checkoutItem } from '#/schemas/checkoutSchema'
import { PurchasedStatus, type Purchased } from '#/types/purchased'
import type User from '#/types/user'
import { nfts } from './nfts'

const purchases: Purchased[] = []

export const createUserPurchases = (
  user: User,
  data: checkoutItem[],
): Purchased => {
  const items = data.map((item) => {
    const findItem = nfts.find((nft) => item.nftId === nft.id && nft.available)

    if (findItem === undefined)
      throw new PurchaseError('NFT não encontrado ou não está disponível.')

    return { ...findItem, quantity: item.quantity }
  })

  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + Number(item.price) * item.quantity
  }, 0)

  const purchased: Purchased = {
    id: crypto.randomUUID(),
    userId: user.id,
    items: items,
    totalPrice,
    status: PurchasedStatus.approved,
    createdAt: new Date().toISOString(),
  }

  purchases.push(purchased)

  return purchased
}

export const getUserPurchases = (userId: string) => {
  return purchases.filter((purchase) => purchase.userId === userId)
}
