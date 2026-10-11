import { api } from '#/lib/axios'
import type INfts from '#/types/nfts'

export const fetchNfts = async () => {
  const response = await api.get<INfts[]>('/nfts')

  return response.data
}
