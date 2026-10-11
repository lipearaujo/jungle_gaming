import { useQuery } from '@tanstack/react-query'
import { fetchNfts } from '#/services/nfts.service'

export const useNfts = () => {
  return useQuery({
    queryKey: ['nfts'],
    queryFn: fetchNfts,
  })
}
