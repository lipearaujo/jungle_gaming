import { Network } from '#/types/nfts'
import type INfts from '#/types/nfts'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'

type Props = {
  nfts: INfts
  className?: string
}

const networkSymbols: Record<Network, string> = {
  [Network.ethereum]: 'ETH',
  [Network.polygon]: 'POL',
  [Network.solana]: 'SOL',
}

const NFTCard = ({ nfts }: Props) => {
  return (
    <Link to="/nft/$nftId" search={{ search: '' }} params={{ nftId: nfts.id }}>
      <Card className="w-full bg-transparent p-0">
        <CardContent className="flex flex-col gap-3 p-0">
          <div className="w-full sm:h-75 h-50 bg-[#241612] flex items-center justify-center">
            <img
              src={nfts.imageUrl}
              alt={nfts.name}
              className="w-full rounded-4xl"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#F7F3EC] leading-4 text-base">{nfts.name}</p>
            <div className="flex gap-2">
              <p className="text-[#E89B55] text-lg font-bold leading-4">
                {nfts.price}
              </p>
              <p className="text-[#E89B55] text-lg font-bold leading-4">
                {networkSymbols[nfts.network]}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default NFTCard
