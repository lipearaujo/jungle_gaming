import type INfts from '#/types/nfts'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'

type Props = {
  nfts: INfts
}

const NFTCard = ({ nfts }: Props) => {
  return (
    <Link to="/nft/$nftId" params={{ nftId: nfts.id }}>
      <Card className="w-64.5 bg-transparent">
        <CardContent className="flex flex-col gap-3">
          <div className="w-full h-75 bg-[#241612] flex items-center justify-center">
            <img
              src={nfts.imageUrl}
              alt={nfts.name}
              className="w-full rounded-4xl"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#F7F3EC] leading-4 text-base">{nfts.name}</p>
            <p className="text-[#E89B55] text-lg font-bold leading-4">
              {nfts.price} ETH
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default NFTCard
