import { http, HttpResponse } from 'msw/http'
import { nfts } from '../data/nfts'

export const nftHandlers = [
  http.get('/api/nfts', () => {
    return HttpResponse.json(nfts)
  }),
]
