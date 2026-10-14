export type NFTAttribute = {
  traitType: string
  value: string
}

export enum Edition {
  '1/1' = '1/1',
  '1/10' = '1/10',
  '1/50' = '1/50',
  aberta = 'ABERTA',
}

export enum Network {
  ethereum = 'Ethereum',
  polygon = 'Polygon',
  solana = 'Solana',
}
export default interface INfts {
  id: string
  name: string
  price: string
  imageUrl: string
  category: string
  available: boolean
  createdAt: string
  isTrending: boolean
  description: string
  collection: string
  edition: Edition
  creator: string
  network: Network
  contractAddress: string
  attributes: NFTAttribute[]
  rating?: number
  reviewCount?: number
}
