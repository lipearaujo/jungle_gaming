import { api } from '#/lib/axios'
import type { CheckoutItems } from '#/types/checkoutItems'
import type { Purchased } from '#/types/purchased'

export const fetchPurchased = async (
  data: CheckoutItems[],
): Promise<Purchased> => {
  const response = await api.post<{ purchased: Purchased }>('/purchases', data)

  return response.data.purchased
}

export const fetchUserPurchases = async () => {
  const response = await api.get('/purchases')

  return response.data
}
