import { useNfts } from '#/hooks/use-nfts'
import { Card, CardContent } from '@/components/ui/card'
import { MoveRight } from 'lucide-react'

const Promos = () => {
  const { data: nfts } = useNfts()

  const randomNft1 = nfts?.[Math.floor(Math.random() * (nfts.length ?? 0))]
  const randomNft2 = nfts?.[Math.floor(Math.random() * (nfts.length ?? 0))]

  return (
    <div className="flex max-sm:flex-col gap-5 justify-between mt-8 sm:mt-24">
      <Card className="w-full sm:w-146.5 h-full sm:h-62.5 bg-[#241612] p-0">
        <CardContent className="w-full h-full p-0 flex justify-between gap-2">
          <div className="w-full h-full">
            <img
              src={randomNft1?.imageUrl}
              alt={randomNft1?.name}
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
          <div className="flex flex-col justify-around gap-2 sm:justify-between sm:items-end text-center sm:text-end sm:p-8 max-sm:w-56">
            <h3 className="font-bold text-[#F5F1EB] sm:leading-6 text-base sm:text-lg max-sm:w-51.5 max-sm:h-12">
              Lançamentos gênesis de edição limitada
            </h3>
            <p className="hidden sm:block text-sm text-[#CFB28C] leading-6  text-end">
              Colecione edições escassas diretamente dos criadores antes da
              revelação pública.
            </p>
            <div className="flex justify-center items-center text-sm gap-2 sm:w-35 sm:h-10 rounded-md cursor-pointer font-medium text-[#D28A4C] sm:text-[#140D0A] sm:bg-[#D28A4C]">
              Explorar
              <MoveRight />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full sm:w-146.5 h-full sm:h-62.5 bg-[#241612] p-0">
        <CardContent className="w-full h-full p-0 flex justify-between gap-2 ">
          <div className="w-full h-full">
            <img
              src={randomNft2?.imageUrl}
              alt={randomNft2?.name}
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
          <div className="flex flex-col justify-around sm:justify-between sm:p-8 sm:items-end text-center sm:text-end max-sm:w-56">
            <h3 className="font-bold text-[#F5F1EB] sm:leading-6 text-base sm:text-lg max-sm:w-51.5 max-sm:h-12">
              Arte digital selecionada e muito mais
            </h3>
            <p className="hidden sm:block text-sm text-[#CFB28C] leading-6 text-end">
              Explore novos artistas, coleções verificadas e obras digitais que
              definem a cultura.
            </p>
            <div className="flex justify-center items-center text-sm gap-2 sm:w-35 sm:h-10 rounded-md cursor-pointer font-medium text-[#D28A4C] sm:text-[#140D0A] sm:bg-[#D28A4C]">
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
