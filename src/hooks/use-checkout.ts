import { fetchPurchased, fetchUserPurchases } from '#/services/checkout.service'
import type { CheckoutItems } from '#/types/checkoutItems'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useCheckout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CheckoutItems[]) => fetchPurchased(data),
    onSuccess: (data) => {
      window.localStorage.setItem('cartItems', JSON.stringify(data))
      queryClient.setQueryData(['cart', 'purchased'], data.userId)
    },
  })
}

export const usePurchased = () => {
  return useQuery({
    queryKey: ['cart', 'purchased'],
    queryFn: fetchUserPurchases,
  })
}
