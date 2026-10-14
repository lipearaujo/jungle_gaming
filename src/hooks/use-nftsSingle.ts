import { useQuery } from '@tanstack/react-query'
import { fetchSingleNft } from '#/services/nftsSingle.service'

export const useSingleNft = (id: string) => {
  return useQuery({
    queryKey: ['nfts', id],
    queryFn: () => fetchSingleNft(id),
  })
}
