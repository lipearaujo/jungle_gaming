import NFTSingleCard from '#/components/nfts/NFTSingleCard'
import { useSingleNft } from '#/hooks/use-nftsSingle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/nft/$nftId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return params.nftId
  },
})

function RouteComponent() {
  const { nftId } = Route.useParams()
  const { data: nft, isError, isPending } = useSingleNft(nftId)

  if (isPending) {
    return <p>Carregando NFT...</p>
  }

  if (isError) {
    return <p>Erro ao carregar NFT.</p>
  }

  return <NFTSingleCard nft={nft} />
}
