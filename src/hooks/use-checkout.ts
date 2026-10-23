import { fetchPurchased, fetchUserPurchases } from '#/services/checkout.service'
import type { CheckoutItems } from '#/types/checkoutItems'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import useCart from './use-cart'

export const useCheckout = () => {
  const { clearCart } = useCart()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CheckoutItems[]) => fetchPurchased(data),
    onSuccess: () => {
      clearCart()
      queryClient.invalidateQueries({ queryKey: ['purchases'] })
    },
  })
}

export const usePurchased = () => {
  return useQuery({
    queryKey: ['purchases'],
    queryFn: fetchUserPurchases,
  })
}
