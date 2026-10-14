import type INfts from '#/types/nfts'

type Props = {
  nft: INfts
}

const NFTDetailsTab = ({ nft }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-[#CFB28C] text-sm leading-6 font-normal">
          {nft.description}
        </p>
      </div>

      <div>
        <h4 className="text-[#F5F1EB] font-bold text-sm leading-6">Rede:</h4>
        <p className="text-[#CFB28C] text-sm leading-6 font-normal">
          Cunhado na {nft.network} com procedência imutável e metadados
          armazenados no IPFS.
        </p>
      </div>

      <div>
        <h4 className="text-[#F5F1EB] font-bold text-sm leading-6">
          Contrato:
        </h4>
        <p className="text-[#CFB28C] text-sm leading-6 font-normal">
          Direitos autorais do criador: 5% nas vendas secundárias, pagos
          automaticamente pelos mercados compatíveis.
        </p>
      </div>

      <div>
        <h4 className="text-[#F5F1EB] font-bold text-sm leading-6">
          Direitos autorais:
        </h4>
        <p className="text-[#CFB28C] w-18 whitespace-nowrap overflow-hidden text-ellipsis">
          {nft.contractAddress}
        </p>
      </div>
    </div>
  )
}

export default NFTDetailsTab
