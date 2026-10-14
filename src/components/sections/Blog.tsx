import { Card, CardContent } from '@/components/ui/card'
import { useNfts } from '#/hooks/use-nfts'
import { MoveRight } from 'lucide-react'

const cards = [
  {
    date: '12 de setembro | Leitura de 6 min',
    title: 'Como funciona a propriedade de NFTs',
    description: 'Aprenda a colecionar, negociar e verificar ativos digitais.',
  },
  {
    date: '13 de setembro | Leitura de 2 min',
    title: '10 artistas digitais para acompanhar',
    description: 'Conheça criadores que moldam a cultura digital.',
  },
  {
    date: '15 de setembro | Leitura de 3 min',
    title: 'Raridade, atributos e procedência',
    description:
      'Entenda raridade, procedência, direitos autorais e utilidade.',
  },
  {
    date: '15 de setembro | Leitura de 2 min',
    title: 'Como proteger sua carteira',
    description: 'Proteja sua carteira, seus ativos e sua identidade.',
  },
]

const Blog = () => {
  const { data: nfts } = useNfts()

  const randomNfts = [...(nfts ?? [])]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <div className="flex flex-col gap-10 mt-24">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="font-bold text-[28px] text-[#F5F1EB]">
          Diário da Cunhagem
        </h2>
        <p className="text-sm text-[#CFB28C]">
          Histórias, guias e insights para colecionadores sobre o universo da
          propriedade digital.
        </p>
      </div>

      <div className="grid grid-cols-4">
        {cards?.map((card, index) => (
          <Card
            key={card.title}
            className="w-67 p-0 rounded-t-xl rounded-b-none bg-[#241612]"
          >
            <CardContent className="p-0 flex flex-col gap-2">
              <div className="w-full h-48.75">
                <img
                  src={randomNfts[index]?.imageUrl}
                  alt={randomNfts[index]?.name}
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="flex flex-col gap-2 py-3 px-4">
                <p className="text-[#CFB28C] text-[12px] font-medium leading-4">
                  {card.date}
                </p>
                <h3 className="text-[#F5F1EB] text-base font-bold leading-none">
                  {card.title}
                </h3>
                <p className="text-[#CFB28C] text-[12px] font-medium leading-4">
                  {card.description}
                </p>
                <span className="cursor-pointer text-[#E89B55] text-[12px] font-bold leading-3.5 flex items-center gap-1">
                  Ler mais <MoveRight size={12} />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Blog
