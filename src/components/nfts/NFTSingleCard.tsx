import { Edition, Network } from '#/types/nfts'
import type INfts from '#/types/nfts'
import { Button } from '@base-ui/react/button'
import { Heart, Star } from 'lucide-react'
import NFTTabs from './tabs/NFTTabs'
import NFTCollection from './NFTCollection'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

type Props = {
  nft: INfts
}

const networkSymbols: Record<Network, string> = {
  [Network.ethereum]: 'ETH',
  [Network.polygon]: 'POL',
  [Network.solana]: 'SOL',
}

const NFTSingleCard = ({ nft }: Props) => {
  const editions = Object.values(Edition)

  return (
    <div className="flex flex-col gap-3 mt-8">
      <p className="text-[15px] text-[#F5F1EB] leading-4 font-bold">
        Início / Mercado
      </p>

      <div className="flex justify-between gap-7">
        <div className="w-143.25 h-112 flex gap-7">
          <div className="w-25 ">
            <div className="grid grid-rows-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="w-25 h-25">
                  <img
                    src={nft?.imageUrl}
                    alt={nft?.name}
                    className="rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-111 h-111 bg-[#241612] rounded-md flex justify-center items-center">
            <img
              src={nft?.imageUrl}
              alt={nft?.name}
              width={404}
              height={404}
              className="rounded-4xl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 grow justify-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-[#F5F1EB] text-[28px] font-bold leading-none">
              {nft?.name}
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-[#E89B55] text-[22px] leading-4 font-bold">{`${nft?.price} ${networkSymbols[nft!.network]}`}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, index) => index).map(
                  (_, index) => (
                    <Star
                      key={index}
                      size={15}
                      color="#D28A4C"
                      fill="#D28A4C"
                    />
                  ),
                )}
                <span className="text-[15px] text-[#F5F1EB] leading-none">
                  19 avaliações de colecionadores
                </span>
              </div>
            </div>
            <div className="h-px bg-[#D28A4C]/30"></div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h4 className="text-[#F5F1EB] text-[15px] leading-4 font-bold">
                Sobre este NFT:
              </h4>
              <p className="text-[#CFB28C] text-sm leading-6">
                {nft?.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-[#F5F1EB] text-[15px] leading-4 font-bold">
                Edição:
              </h4>
              <div className="flex items-center gap-1.5">
                {editions.map((edition, index) => (
                  <span
                    key={index}
                    className={`font-medium text-sm leading-4 border border-[#3F2319] rounded-full py-2 px-1.5 ${edition === nft.edition ? 'text-[#E89B55]' : 'text-[#CFB28C]'}`}
                  >
                    {edition}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Button className="w-8.25 h-[49.5px] font-bold rounded-4xl cursor-pointer py-2 px-3 text-black bg-[#D28A4C]">
                  -
                </Button>
                <span className="text-[#F5F1EB] text-xl leading-7">1</span>
                <Button className="w-8.25 h-[49.5px] font-bold rounded-4xl cursor-pointer py-2 px-3 text-black bg-[#D28A4C]">
                  +
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button className="font-bold rounded-md cursor-pointer py-2 px-3 text-black bg-[#D28A4C]">
                  COMPRAR
                </Button>

                <Button className="flex items-center gap-2 font-medium rounded-md cursor-pointer py-2 px-3 border border-[#E89B55] text-[#E89B55] bg-transparent">
                  <Heart />
                  Favoritar
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3 self-start justify-end">
              <span className="text-[#B39463] text-[15px] leading-none">
                ID do token: #{nft.id.slice(nft.id.length - 3, nft.id.length)}
              </span>
              <span className="text-[#B39463] text-[15px] leading-none">
                Coleção: {nft.collection}
              </span>
              <span className="text-[#B39463] text-[15px] leading-none">
                Atributos:{' '}
                {nft.attributes.map((attribute) => attribute.value).join(', ')}
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-[15px] text-[#F5F1EB] font-bold leading-4">
                Compartilhar este NFT:
              </span>
              <FaLinkedinIn />
              <MdOutlineEmail />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>

      <NFTTabs nft={nft} />

      <NFTCollection nft={nft} />
    </div>
  )
}

export default NFTSingleCard
