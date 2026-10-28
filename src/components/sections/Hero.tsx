import { useNfts } from '#/hooks/use-nfts'
import { Button } from '@base-ui/react/button'

const Hero = () => {
  const { data: nfts } = useNfts()

  const randomNft = nfts?.[Math.floor(Math.random() * (nfts.length ?? 0))]

  return (
    <section className="sm:mt-8 mt-4 sm:h-112.5 w-full h-47.5">
      <div className="flex gap-4 p-2.5 items-center sm:justify-between sm:bg-linear-to-r rounded-4xl sm:from-[#140D0A] sm:to-[#140D0A] bg-linear-to-r from-[#D28A4C]/45 to-[#D28A4C]">
        <div className="sm:w-150  flex flex-col sm:gap-3 gap-4 sm:px-8">
          <p className="font-medium sm:text-sm text-[12px] leading-4 text-[#F5F1EB]">
            Bem-vindo à Kurio
          </p>
          <h1 className="hidden sm:block font-bold sm:text-[43px] text-lg sm:leading-17.5 leading-7.25">
            SEJA DONO DO FUTURO DA ARTE DIGITAL
          </h1>
          <h1 className="sm:hidden font-bold sm:text-[43px] text-lg sm:leading-17.5 leading-7.25">
            SEJA DONO DA CULTURA DIGITAL
          </h1>
          <p className="hidden sm:block font-normal text-sm leading-6 text-[#CFB28C] w-137.5 text-start">
            Descubra NFTs selecionados de criadores emergentes e consagrados.
            Colecione arte digital rara, apoie artistas e tenha uma parte da
            cultura da internet.
          </p>
          <p className="sm:hidden  font-normal text-[12px] leading-6 text-[#CFB28C]  text-start">
            Descubra NFTs selecionados de criadores do mundo todo.
          </p>
          <Button className="sm:w-35 sm:h-10 rounded-md sm:bg-[#D28A4C] font-bold sm:text-[#140D0A] sm:text-center text-[#E89B55] text-start cursor-pointer">
            EXPLORAR
          </Button>

          <div className="flex justify-end gap-2 items-center  h-full">
            <div className="bg-[#D28A4C] w-2 h-2 rounded-full"></div>
            <div className="bg-[#D28A4C] w-2 h-2 rounded-full"></div>
            <div className="bg-[#D28A4C] w-2 h-2 rounded-full"></div>
          </div>
        </div>

        <div className="sm:w-112.5 sm:h-112.5 w-full h-full rounded-md">
          <img
            src={randomNft?.imageUrl}
            alt={randomNft?.name}
            width={450}
            height={450}
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
