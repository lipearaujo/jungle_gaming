import Cart from '#/components/cart/Cart'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/nft/cart')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Cart />
}
