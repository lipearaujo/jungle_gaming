import { Edition, Network } from '#/types/nfts'
import type INfts from '#/types/nfts'

import { ChevronLeft, Heart, ShoppingCart, Star } from 'lucide-react'
import NFTTabs from './tabs/NFTTabs'
import NFTCollection from './NFTCollection'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import useCart from '#/hooks/use-cart'
import { Input } from '../ui/input'
import { useState } from 'react'
import { Link, useRouter } from '@tanstack/react-router'
import { Button } from '../ui/button'

type Props = {
  nft: INfts
}

const networkSymbols: Record<Network, string> = {
  [Network.ethereum]: 'ETH',
  [Network.polygon]: 'POL',
  [Network.solana]: 'SOL',
}

const NFTSingleCard = ({ nft }: Props) => {
  const { addItem } = useCart()
  const [itemQuantity, setItemQuantity] = useState<number>(1)
  const editions = Object.values(Edition)
  const router = useRouter()

  const handleGoBack = () => {
    if (router.history.canGoBack()) {
      router.history.back()
    } else {
      router.navigate({ to: '/', search: { search: '' } })
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:mt-8">
      <p className="hidden sm:block text-[15px] text-[#F5F1EB] leading-4 font-bold">
        Início / Mercado
      </p>

      <div className="sm:hidden flex items-center justify-between">
        <Button
          onClick={handleGoBack}
          size="icon-lg"
          variant="default"
          className="w-8.75 h-8.75 rounded-full bg-[#3F2319]"
        >
          <ChevronLeft color="#B39463" size={20} />
        </Button>
        <div className="w-8.75 h-8.75 rounded-full bg-[#3F2319] flex items-center justify-center">
          <Heart color="#B39463" size={20} />
        </div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between gap-7">
        <div className="sm:w-143.25 sm:h-112 flex gap-7">
          <div className="hidden sm:block sm:w-25">
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

          <div className="w-full h-full sm:w-111 sm:h-111 sm:bg-[#241612] rounded-md flex justify-center items-center">
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
          <div className="flex sm:flex-col gap-3 justify-between">
            <h2 className="text-[#F5F1EB] text-xl sm:text-[28px] font-bold leading-none">
              {nft?.name}
            </h2>

            <div className="flex items-center justify-between">
              <span className="hidden sm:block text-[#E89B55] text-[22px] leading-4 font-bold">{`${nft?.price} ${networkSymbols[nft!.network]}`}</span>

              <div className="sm:hidden flex items-center gap-2 px-2 justify-center text-sm border border-[#D28A4C] rounded-4xl">
                <Star size={14} color="#D28A4C" fill="#D28A4C" />
                <span>
                  4.8 <span className="text-[#CFB28C]">(19)</span>
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1">
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
              <h4 className="text-[#F5F1EB] text-[15px] leading-4 font-bold hidden sm:block">
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

            <div className="hidden sm:flex items-center justify-between">
              <div className="flex items-center">
                <Button
                  onClick={() => {
                    setItemQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }}
                  className="hover:bg-[#D28A4C] text-xl w-8.25 h-[49.5px] font-bold rounded-full cursor-pointer py-2 px-3 text-black bg-[#D28A4C]"
                >
                  -
                </Button>
                <Input
                  type="number"
                  value={itemQuantity}
                  className="text-[#F5F1EB] text-xl bg-transparent border-0 outline-none w-10 text-center"
                />
                <Button
                  onClick={() => {
                    setItemQuantity((prev) => prev + 1)
                  }}
                  className="hover:bg-[#D28A4C] text-xl w-8.25 h-[49.5px] font-bold rounded-full cursor-pointer py-2 px-3 text-black bg-[#D28A4C]"
                >
                  +
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={() => addItem(nft, itemQuantity)}
                  className="hover:bg-[#D28A4C] font-bold rounded-md cursor-pointer text-sm w-32.5 h-10 text-black bg-[#D28A4C]"
                >
                  COMPRAR
                </Button>

                <Button className="hover:bg-transparent flex items-center gap-2 font-medium rounded-md cursor-pointer text-sm w-32.5 h-10 border border-[#E89B55] text-[#E89B55] bg-transparent">
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

            <div className="sm:hidden flex flex-col gap-3 mt-8 bg-[#241612] max-sm:-mx-4 max-sm:-mb-4 max-sm:p-4 rounded-t-[40px]">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#CFB28C]">Qtd.</span>

                  <Button
                    onClick={() => {
                      setItemQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }}
                    className="hover:bg-[#D28A4C] flex items-center justify-center w-5 h-7.5 font-bold rounded-4xl cursor-pointer text-black bg-[#D28A4C]"
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    value={itemQuantity}
                    className="text-[#F5F1EB] text-base leading-7 bg-transparent border-0 max-sm:p-0 outline-none w-5 text-center"
                  />
                  <Button
                    onClick={() => {
                      setItemQuantity((prev) => prev + 1)
                    }}
                    className="hover:bg-[#D28A4C] flex items-center justify-center w-5 h-7.5 font-bold rounded-4xl cursor-pointer text-black bg-[#D28A4C]"
                  >
                    +
                  </Button>
                </div>

                <span className="text-[#E89B55] text-xl leading-4 font-bold">{`${nft?.price} ${networkSymbols[nft!.network]}`}</span>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  onClick={() => addItem(nft, itemQuantity)}
                  className="hover:bg-[#D28A4C] text-base w-49 h-15 font-bold rounded-full cursor-pointer text-black bg-[#D28A4C]"
                >
                  Comprar NFT
                </Button>

                <Link
                  to="/nft/cart"
                  search={{
                    search: '',
                  }}
                  className="flex items-center justify-center rounded-full cursor-pointer w-15 h-15 border border-[#E89B55] text-[#E89B55] bg-[#3F2319]"
                >
                  <ShoppingCart size={20} />
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex gap-2 items-center">
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
