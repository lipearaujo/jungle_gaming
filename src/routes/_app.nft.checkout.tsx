import Checkout from '#/components/cart/Checkout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/nft/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Checkout />
}
