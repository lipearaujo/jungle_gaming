import { NFTView } from '#/types/nft-view'
import type INfts from '#/types/nfts'
import { Button } from '@base-ui/react/button'
import NFTCard from './NFTCard'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const items = [
  { label: 'Listados recentemente', value: 'Listados recentemente' },
]

type Props = {
  nfts: INfts[]
  selectedView: string
  onSelectedView: (value: NFTView) => void
  currentPage: number
  totalPages: number
  onPageChange: (value: number) => void
}

const NFTGrid = ({
  nfts,
  selectedView,
  onSelectedView,
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex justify-between items-center">
        <NavigationMenu className="">
          <NavigationMenuList className="">
            <NavigationMenuItem className="flex gap-5">
              <NavigationMenuLink
                onClick={() => onSelectedView(NFTView.all)}
                className={
                  selectedView === NFTView.all
                    ? 'text-[#E89B55] p-0 text-[15px] font-medium leading-4 cursor-pointer border-b-2 border-b-[#E89B55]'
                    : 'text-[#F5F1EB] p-0 text-[15px] font-medium leading-4 cursor-pointer'
                }
              >
                Todos os NFTs
              </NavigationMenuLink>
              <NavigationMenuLink
                onClick={() => onSelectedView(NFTView.new)}
                className={
                  selectedView === NFTView.new
                    ? 'text-[#E89B55] p-0 text-[15px] font-medium leading-4 cursor-pointer border-b-2 border-b-[#E89B55]'
                    : 'text-[#F5F1EB] p-0 text-[15px] font-medium leading-4 cursor-pointer'
                }
              >
                Novos lançamentos
              </NavigationMenuLink>
              <NavigationMenuLink
                onClick={() => onSelectedView(NFTView.trending)}
                className={
                  selectedView === NFTView.trending
                    ? 'text-[#E89B55] p-0 text-[15px] font-medium leading-4 cursor-pointer border-b-2 border-b-[#E89B55]'
                    : 'text-[#F5F1EB] p-0 text-[15px] font-medium leading-4 cursor-pointer'
                }
              >
                Em alta
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-center gap-1 w-75 h-4.5">
          <p className="text-[15px] leading-none ">Ordenar por:</p>
          <Select items={items} defaultValue={'Listados recentemente'}>
            <SelectTrigger className="max-w-48 bg-transparent border-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-18">
        {nfts.map((nft) => (
          <NFTCard key={nft.id} nfts={nft} />
        ))}
      </div>

      {nfts.length > 0 ? (
        <div className="flex gap-2 justify-end">
          <Button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`border border-[#D28A4C] w-8.75 h-8.75 rounded-md cursor-pointer flex items-center justify-center text-[#F5F1EB] font-bold text-lg 
              ${
                currentPage === 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-[#D28A4C]/20'
              }
            `}
          >
            <ChevronLeft />
          </Button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <Button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={
                  page === currentPage
                    ? 'border border-[#D28A4C] bg-[#D28A4C] w-8.75 h-8.75 rounded-md cursor-pointer flex items-center justify-center text-[#140D0A] font-bold text-lg'
                    : 'border border-[#D28A4C] w-8.75 h-8.75 rounded-md cursor-pointer flex items-center justify-center text-[#F5F1EB] font-bold text-lg'
                }
              >
                {page}
              </Button>
            ),
          )}

          <Button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className={`border border-[#D28A4C] w-8.75 h-8.75 rounded-md cursor-pointer flex items-center justify-center text-[#F5F1EB] font-bold text-lg 
              ${
                currentPage >= totalPages
                  ? 'opacity-40 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-[#D28A4C]/20'
              }
            `}
          >
            <ChevronRight />
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NFTGrid
