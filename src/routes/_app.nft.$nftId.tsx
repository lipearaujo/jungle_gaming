import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/nft/$nftId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/nft/$nftId"!</div>
}
