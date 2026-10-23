import Checkout from '#/components/cart/Checkout'
import { AuthError, InvalidSessionError } from '#/errors/authErros'
import { fetchCurrentUser } from '#/services/auth.service'
import { getToken } from '#/utils/authStorage'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/nft/checkout')({
  beforeLoad: async ({ context, location }) => {
    const token = getToken()

    if (!token) {
      throw redirect({
        to: '/login',
        search: {
          returnTo: '/',
          redirect: location.href,
        },
      })
    }

    try {
      const user = await context.queryClient.query({
        queryKey: ['auth', 'me'],
        queryFn: fetchCurrentUser,
      })

      return { user }
    } catch (error) {
      if (error instanceof AuthError) {
        throw redirect({
          to: '/login',
          search: {
            returnTo: '/',
            redirect: location.href,
          },
        })
      }

      throw error
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Checkout />
}
