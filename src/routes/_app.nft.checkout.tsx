import Checkout from '#/components/cart/Checkout'
import { requiredAuth } from '#/lib/requiredAuth'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/nft/checkout')({
  beforeLoad: ({ context, location }) => requiredAuth({ context, location }),
  component: RouteComponent,
})

function RouteComponent() {
  return <Checkout />
}
