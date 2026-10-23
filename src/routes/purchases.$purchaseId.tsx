import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '#/components/ui/table'
import { usePurchased } from '#/hooks/use-checkout'
import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/purchases/$purchaseId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: purchases } = usePurchased()
  const { purchaseId } = useParams({ from: '/purchases/$purchaseId' })

  const purchase = purchases?.find((purchase) => purchase.id === purchaseId)
  const date = new Date(purchase!.createdAt)
  const day = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
  }).format(date)
  const month = new Intl.DateTimeFormat('pt-BR', {
    month: 'short',
  }).format(date)
  const year = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
  }).format(date)

  const formattedDate = `${day} ${month.replace('.', '')}, ${year}`

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-144.5 border-b-10 border-b-[#D28A4C] bg-[#241612] flex flex-col">
        <div className="flex flex-col h-39 items-center justify-center gap-4">
          <img src="/assets/thank_you.png" alt="thank_you" />
          <p className="text-[#CFB28C] text-base font-bold leading-4">
            Seus NFTs agora estão na sua carteira
          </p>
        </div>

        <div className="py-1 px-9 border border-l-0 border-r-0 border-[#D28A4C]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1 p-2">
              <p className="text-[#CFB28C] text-sm leading-4 font-bold">
                ID da transação
              </p>
              <p className="text-[#CFB28C] text-sm leading-none">
                {purchase?.id.slice(0, 8)}...
              </p>
            </div>

            <div className="h-8 w-0.5 bg-[#D28A4C]"></div>

            <div className="flex flex-col gap-1 p-2">
              <p className="text-[#CFB28C] text-sm leading-4">Data</p>
              <p className="text-[#CFB28C] text-sm leading-none">
                {formattedDate}
              </p>
            </div>

            <div className="h-8 w-0.5 bg-[#D28A4C]"></div>

            <div className="flex flex-col gap-1 p-2">
              <p className="text-[#CFB28C] text-sm leading-4">Total</p>
              <p className="text-[#CFB28C] text-sm leading-none">
                {purchase?.totalPrice} ETH
              </p>
            </div>

            <div className="h-8 w-0.5 bg-[#D28A4C]"></div>

            <div className="flex flex-col gap-1 p-2">
              <p className="text-[#CFB28C] text-sm leading-4 font-bold">
                Carteira
              </p>
              <p className="text-[#CFB28C] text-sm leading-none">Metamask</p>
            </div>
          </div>
        </div>

        <div className="px-11 pt-5 pb-12">
          <p className="text-[15px] text-[#F5F1EB] leading-4 font-bold">
            Detalhes da transação
          </p>

          <Table className="border-separate border-spacing-y-3">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#F5F1EB] font-bold text-base leading-4 border-b border-b-[#D28A4C]/30 pb-3">
                  NFTs
                </TableHead>
                <TableHead className="text-[#F5F1EB] font-bold text-base leading-4 text-center border-b border-b-[#D28A4C]/30 pb-3">
                  Edições
                </TableHead>
                <TableHead className="text-[#F5F1EB] font-bold text-base leading-4 text-center border-b border-b-[#D28A4C]/30 pb-3">
                  Subtotal
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchase?.items.map((item) => (
                <TableRow className="bg-[#241612]">
                  <TableCell className="p-0 ">
                    <div className="flex items-center gap-4">
                      <div className="w-17.5 h-17.5 rounded-lg">
                        <img
                          className="rounded-lg"
                          src={item.imageUrl}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-[#F5F1EB] text-base leading-4 font-bold">
                          {item.name}
                        </p>
                        <p className="text-sm text-[#B39463] leading-4">
                          ID do token: #
                          {item.id.slice(item.id.length - 3, item.id.length)}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-[#CFB28C] font-bold text-base leading-4">
                    (x {item.quantity})
                  </TableCell>

                  <TableCell className="text-center text-[#E89B55] font-bold text-base leading-4">
                    {Number(item.price) * item.quantity} ETH
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-end p-3 border-b border-b-[#D28A4C]/30">
            <div className="flex flex-col gap-3 w-80.25  items-end">
              <div className="w-full flex justify-between">
                <p className="text-[15px] text-[#F5F1EB]">Taxa de rede</p>
                <p className="text-[15px] text-[#F5F1EB]">0.016 ETH</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="text-base leading-4 font-bold text-[#F5F1EB]">
                  Total
                </p>
                <p className="text-lg leading-4 text-[#E89B55] font-bold">
                  {purchase!.totalPrice + 0.016} ETH
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 flex flex-col items-center justify-between">
            <p className="text-[#CFB28C] text-sm text-center leading-5.5">
              Transação confirmada na Ethereum. A propriedade foi transferida
              para sua carteira conectada e registrada na rede.
            </p>

            <div className="bg-[#D28A4C] mt-5 w-46.5 h-12 flex justify-center items-center font-bold rounded-md text-[#140D0A] text-base leading-4">
              Ver no Etherscan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
