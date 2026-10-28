import { Button } from '@base-ui/react/button'
import { Slider } from '@/components/ui/slider'
import type INfts from '#/types/nfts'
import type ICategory from '#/types/category'
import { Network } from '#/types/nfts'

type Props = {
  nfts: INfts[]
  categories: ICategory[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  priceRange: number[]
  onPriceRangeChange: (range: number[]) => void
  appliedPriceRange: number[]
  onApplyPrice: (range: number[]) => void
  selectedNetwork: string
  onNetworkChange: (network: Network) => void
}

const Sidebar = ({
  nfts,
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  onApplyPrice,
  selectedNetwork,
  onNetworkChange,
}: Props) => {
  const randomNft = nfts?.[Math.floor(Math.random() * (nfts.length ?? 0))]
  const networkValues = Object.values(Network)

  return (
    <aside className="hidden sm:flex flex-col w-77.5">
      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col gap-5 bg-[#241612] p-6">
          <div>
            <h3 className="font-bold text-lg text-[#F5F1EB] leading-4">
              Coleções
            </h3>
            <ul className="p-5 flex flex-col gap-5">
              {categories?.map((category) => (
                <li
                  onClick={() => onCategoryChange(category.name)}
                  key={category.id}
                  className={
                    selectedCategory === category.name
                      ? 'cursor-pointer flex items-center justify-between text-[#E89B55]'
                      : 'cursor-pointer flex items-center justify-between text-[#CFB28C]'
                  }
                >
                  {category.name}
                  <span>
                    (
                    {nfts?.filter((nft) => nft.category === category.name)
                      .length ?? 0}
                    )
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-lg text-[#F5F1EB] leading-4">
              Faixa de preço
            </h3>

            <div className="flex flex-col gap-4 w-full">
              <Slider
                className="bg-[#D28A4C]"
                value={priceRange}
                onValueChange={(value) => onPriceRangeChange(value as number[])}
                min={0.02}
                max={15}
                step={0.01}
              />
              <span className="text-sm font-normal text-[#F5F1EB]  w-full">
                Preço: {priceRange.join(' - ')} ETH
              </span>
              <Button
                onClick={() => onApplyPrice(priceRange)}
                className="self-start font-bold rounded-md cursor-pointer py-2 px-3 text-black bg-[#D28A4C]"
              >
                Aplicar
              </Button>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-lg text-[#F5F1EB] leading-4">Rede</h3>
            <div className="p-5 flex flex-col gap-4">
              <ul className="flex flex-col gap-5">
                {networkValues.map((network, index) => (
                  <li
                    key={index}
                    onClick={() => onNetworkChange(network)}
                    className={`cursor-pointer flex items-center justify-between ${
                      selectedNetwork === network
                        ? 'text-[#E89B55]'
                        : 'text-[#CFB28C]'
                    }`}
                  >
                    {network}
                    <span>
                      (
                      {nfts.filter((nft) => nft.network === network).length ??
                        0}
                      )
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-b-4xl flex flex-col h-117.5 bg-linear-to-b from-[#D28A4C]/10 to-[#D28A4C]/3">
          <div className="p-6 flex flex-col gap-4">
            <h3 className="font-bold text-2xl leading-8 text-[#E89B55]">
              NFT EM DESTAQUE
            </h3>
            <h4 className="text-[#F5F1EB] font-bold text-[22px] leading-4 text-center">
              OFERTA LIMITADA
            </h4>
          </div>
          <div className="h-full">
            {randomNft && (
              <img
                src={randomNft.imageUrl}
                alt={randomNft.name}
                className="w-full h-full object-cover rounded-4xl"
              />
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
