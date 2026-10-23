import { useNfts } from '#/hooks/use-nfts'
import { Card, CardContent } from '@/components/ui/card'
import { MoveRight } from 'lucide-react'

const Promos = () => {
  const { data: nfts } = useNfts()

  const randomNft1 = nfts?.[Math.floor(Math.random() * (nfts.length ?? 0))]
  const randomNft2 = nfts?.[Math.floor(Math.random() * (nfts.length ?? 0))]

  return (
    <div className="flex justify-between mt-24">
      <Card className="w-146.5 h-62.5 bg-[#241612] p-0">
        <CardContent className="p-0 flex gap-2">
          <div className="w-73 h-62.5">
            <img
              src={randomNft1?.imageUrl}
              alt={randomNft1?.name}
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
          <div className="flex flex-col justify-evenly items-end text-end">
            <h3 className="font-bold text-[#F5F1EB] leading-6 text-lg w-51.5 h-12">
              Lançamentos gênesis de edição limitada
            </h3>
            <p className="text-sm text-[#CFB28C] leading-6 w-65.75 h-11.25 items-end text-end">
              Colecione edições escassas diretamente dos criadores antes da
              revelação pública.
            </p>
            <div className="flex justify-center items-center text-sm gap-2 w-35 h-10 rounded-md cursor-pointer font-medium text-[#140D0A] bg-[#D28A4C]">
              Explorar
              <MoveRight />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-146.5 h-62.5 bg-[#241612] p-0">
        <CardContent className="p-0 flex gap-2">
          <div className="w-73 h-62.5">
            <img
              src={randomNft2?.imageUrl}
              alt={randomNft2?.name}
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
          <div className="flex flex-col justify-evenly items-end text-end">
            <h3 className="font-bold text-[#F5F1EB] leading-6 text-lg w-65 h-12">
              Arte digital selecionada e muito mais
            </h3>
            <p className="text-sm text-[#CFB28C] leading-6 w-65.75 h-11.25 items-end text-end">
              Explore novos artistas, coleções verificadas e obras digitais que
              definem a cultura.
            </p>
            <div className="flex justify-center items-center text-sm gap-2 w-35 h-10 rounded-md cursor-pointer font-medium text-[#140D0A] bg-[#D28A4C]">
              Explorar
              <MoveRight />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Promos
