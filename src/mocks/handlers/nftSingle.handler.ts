import { http, HttpResponse } from 'msw/http'
import { nfts } from '../data/nfts'

export const nftSingleHandler = [
  http.get('/api/nfts/:id', ({ params }) => {
    const { id } = params

    const nftSingle = nfts.find((nft) => nft.id === id)

    if (!nftSingle)
      return HttpResponse.json({ error: 'Not Found' }, { status: 404 })

    return HttpResponse.json(nftSingle)
  }),
]
