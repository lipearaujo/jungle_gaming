import { api } from '#/lib/axios'
import type INfts from '#/types/nfts'

export const fetchSingleNft = async (id: string) => {
  const response = await api.get<INfts>(`/nfts/${id}`)

  return response.data
}
