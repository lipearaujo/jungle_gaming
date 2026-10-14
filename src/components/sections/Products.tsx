import { useCategories } from '#/hooks/use-categories'
import { useNfts } from '#/hooks/use-nfts'
import { useState } from 'react'
import Sidebar from '../layout/Sidebar'
import NFTGrid from '../nfts/NFTGrid'
import { NFTView } from '#/types/nft-view'
import { Network } from '#/types/nfts'

const Products = () => {
  const { data: categories } = useCategories()
  const { data: nfts, isError, isPending } = useNfts()

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'Arte digital',
  )
  const [selectedView, setSelectedView] = useState<NFTView>(NFTView.all)
  const [priceRange, setPriceRange] = useState([0.02, 15])
  const [appliedPriceRange, setAppliedPriceRange] = useState([0.02, 15])
  const [minPrice, maxPrice] = appliedPriceRange
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(
    Network.ethereum,
  )
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const filteredNfts = nfts?.filter(
    (nft) =>
      (nft.category === selectedCategory || selectedCategory === null) &&
      Number(nft.price) >= minPrice &&
      Number(nft.price) <= maxPrice,
  )

  const filteredByView = filteredNfts?.filter((nft) => {
    if (selectedView === NFTView.all) return true

    if (selectedView === NFTView.new) {
      const currDate = Date.now()
      const nftDate = new Date(nft.createdAt).getTime()
      const isNew = currDate - nftDate

      return nftDate <= currDate && isNew <= 30 * 24 * 60 * 60 * 1000
    }

    if (selectedView === NFTView.trending) {
      return nft.isTrending === true
    }
  })

  const filteredByNetwork = filteredByView?.filter((nft) => {
    if (selectedNetwork === nft.network) return nft.network
  })

  const sortedNfts = [...(filteredByNetwork ?? [])].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )

  const paginatedNfts = sortedNfts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(sortedNfts.length / pageSize)

  return (
    <section className="flex gap-12 mt-22">
      <Sidebar
        nfts={nfts ?? []}
        categories={categories ?? []}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        appliedPriceRange={appliedPriceRange}
        onApplyPrice={setAppliedPriceRange}
        selectedNetwork={selectedNetwork}
        onNetworkChange={setSelectedNetwork}
      />
      <NFTGrid
        selectedView={selectedView}
        onSelectedView={setSelectedView}
        nfts={paginatedNfts ?? []}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  )
}

export default Products
