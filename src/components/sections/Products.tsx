import { useCategories } from '#/hooks/use-categories'
import { useNfts } from '#/hooks/use-nfts'
import { useState } from 'react'
import Sidebar from '../layout/Sidebar'
import NFTGrid from '../nfts/NFTGrid'
import { NFTView } from '#/types/nft-view'

const Products = () => {
  const { data: categories } = useCategories()
  const { data: nfts } = useNfts()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'Arte digital',
  )
  const [selectedView, setSelectedView] = useState<NFTView>(NFTView.all)
  const [priceRange, setPriceRange] = useState([0.02, 15])
  const [appliedPriceRange, setAppliedPriceRange] = useState([0.02, 15])
  const [minPrice, maxPrice] = appliedPriceRange
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

  const sortedNfts = [...(filteredByView ?? [])].sort(
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
