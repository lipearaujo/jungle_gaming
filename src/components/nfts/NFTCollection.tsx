import { useNfts } from '#/hooks/use-nfts'
import type INfts from '#/types/nfts'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import NFTCard from './NFTCard'
import { Button } from '../ui/button'
import { useState } from 'react'

type Props = {
  nft: INfts
}

const NFTCollection = ({ nft }: Props) => {
  const { data } = useNfts()
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredByCollection = data?.filter(
    (nfts) => nfts.collection === nft.collection && nfts.id !== nft.id,
  )

  return (
    <div className="mt-24 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="font-bold text-[#E89B55] text-[17px] leading-4">
          Mais desta coleção
        </p>

        <div className="h-px bg-[#D28A4C]/30"></div>
      </div>

      <Carousel setApi={setCarouselApi} className="">
        <CarouselContent className="-ml-9">
          {filteredByCollection?.map((nftsByCollection) => (
            <CarouselItem key={nftsByCollection.id} className="basis-1/5 pl-9">
              <NFTCard nfts={nftsByCollection} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-2 items-center justify-center">
        {carouselApi?.scrollSnapList().map((_, index) => (
          <Button
            key={index}
            onClick={() => {
              carouselApi.scrollTo(index)
              setSelectedIndex(carouselApi.selectedScrollSnap())
            }}
            className={`hover:bg-[#D28A4C] border border-[#D28A4C] p-0 w-3 h-3 rounded-full cursor-pointer ${selectedIndex === index ? 'bg-[#D28A4C]' : 'bg-transparent '}`}
          ></Button>
        ))}
      </div>
    </div>
  )
}

export default NFTCollection
