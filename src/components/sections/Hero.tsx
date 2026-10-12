import { Button } from '@base-ui/react/button'

const Hero = () => {
  return (
    <section className="mt-8 w-full h-112.5">
      <div className="flex justify-between">
        <div className="w-150 flex flex-col gap-3 px-8">
          <p className="font-medium text-sm leading-4 text-[#F5F1EB]">
            Bem-vindo à Kurio
          </p>
          <h1 className="font-bold text-[43px] leading-17.5">
            SEJA DONO DO FUTURO DA ARTE DIGITAL
          </h1>
          <p className="font-normal text-sm leading-6 text-[#CFB28C] w-137.5 text-start">
            Descubra NFTs selecionados de criadores emergentes e consagrados.
            Colecione arte digital rara, apoie artistas e tenha uma parte da
            cultura da internet.
          </p>
          <Button className="w-35 h-10 rounded-md bg-[#D28A4C] font-bold text-[#140D0A] cursor-pointer">
            EXPLORAR
          </Button>

          <div className="flex justify-end gap-2 items-center  h-full">
            <div className="bg-[#D28A4C] w-2 h-2 rounded-full"></div>
            <div className="bg-[#D28A4C] w-2 h-2 rounded-full"></div>
            <div className="bg-[#D28A4C] w-2 h-2 rounded-full"></div>
          </div>
        </div>

        <div className="w-112.5 h-112.5 rounded-md">
          <img
            src="/assets/NFT_artwork_01.png"
            alt="Imagem de NFT"
            width={450}
            height={450}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
