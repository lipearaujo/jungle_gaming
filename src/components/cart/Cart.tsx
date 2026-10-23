import { Trash } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import CartCollection from './CartCollection'
import useCart from '#/hooks/use-cart'
import { useCurrentUser } from '#/hooks/use-auth'

const Cart = () => {
  const { data: user } = useCurrentUser()
  const { items, incrementItem, decrementItem, removeItem, totalPrice } =
    useCart()

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  return (
    <div className="flex flex-col gap-3 mt-8">
      <p className="text-[15px] text-[#F5F1EB] leading-4 font-bold">
        Início / Mercado / Carrinho
      </p>

      <div className="flex justify-between gap-6">
        <Table className="-mt-3 border-separate border-spacing-y-3">
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#F5F1EB] font-bold text-base leading-4 border-b border-b-[#D28A4C]/30 pb-3">
                NFTs
              </TableHead>
              <TableHead className="text-[#F5F1EB] font-bold text-base leading-4 text-center border-b border-b-[#D28A4C]/30 pb-3">
                Preço
              </TableHead>
              <TableHead className="text-[#F5F1EB] font-bold text-base leading-4 text-center border-b border-b-[#D28A4C]/30 pb-3">
                Edições
              </TableHead>
              <TableHead className="text-[#F5F1EB] font-bold text-base leading-4 text-center border-b border-b-[#D28A4C]/30 pb-3">
                Total
              </TableHead>
              <TableHead className="text-[#F5F1EB] font-bold text-base leading-4 text-center border-b border-b-[#D28A4C]/30 pb-3"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow className="bg-[#241612]">
                <TableCell className="p-0 ">
                  <div className="flex items-center gap-4">
                    <div className="w-17.5 h-17.5 rounded-lg">
                      <img src={item.imageUrl} alt={item.name} />
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
                  {item.price}
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center items-center gap-3">
                    <Button
                      onClick={() => {
                        decrementItem(item.id)
                      }}
                      className="bg-[#D28A4C] w-5 h-7.5 text-black text-base hover:bg-[#D28A4C] cursor-pointer"
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      className="text-[#F5F1EB] text-xl leading-7 bg-transparent border-0 outline-none w-10 text-center"
                    />
                    <Button
                      onClick={() => {
                        incrementItem(item.id)
                      }}
                      className="bg-[#D28A4C] w-5 h-7.5 text-black text-base hover:bg-[#D28A4C] cursor-pointer"
                    >
                      +
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-center text-[#E89B55] font-bold text-base leading-4">
                  {Number(item.price) * item.quantity}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => removeItem(item.id)}
                    className="p-0 bg-transparent hover:bg-transparent transition-none cursor-pointer"
                  >
                    <Trash color="#B39463" className="size-5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="w-83 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-[#F5F1EB] font-bold text-lg leading-4">
              Resumo da carteira
            </p>
            <div className="border-t border-t-[#D28A4C]/30"></div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[#F5F1EB] font-bold text-sm leading-4">
              Código promocional
            </p>
            <div className="flex border border-[#D28A4C] rounded-md">
              <Input
                className="h-10 placeholder:text-[#B0916A] border-0 leading-4   bg-transparent text-[#F5F1EB]"
                placeholder="Digite o código promocional..."
              />
              <Button className="rounded-none cursor-pointer border border-[#D28A4C] text-[15px] leading-4 font-bold text-black w-25.5 h-10 bg-[#D28A4C] hover:bg-[#D28A4C]">
                Aplicar
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="text-[#F5F1EB] leading-none text-[15px]">
                Subtotal
              </p>
              <p className="text-[#F5F1EB] leading-4 text-lg">
                {totalPrice.toFixed(2)} ETH
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#F5F1EB] leading-none text-[15px]">
                Desconto do lançamento
              </p>
              <p className="text-[#F5F1EB] leading-4 text-lg">(-) 00.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#F5F1EB] leading-none text-[15px]">
                Taxa de rede
              </p>
              <p className="text-[#F5F1EB] leading-4 text-lg">0.016 ETH</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-bold text-base leading-4 text-[#F5F1EB]">
              Total
            </p>
            <p className="font-bold text-lg leading-4 text-[#E89B55]">
              {(totalPrice + 0.016).toFixed(3)} ETH
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {user ? (
              <>
                <Link
                  to="/nft/checkout"
                  className="text-[#140D0A] font-bold text-[15px] leading-4 h-10 bg-[#D28A4C] cursor-pointer hover:bg-[#D28A4C] rounded-md flex justify-center items-center"
                >
                  Finalizar Pedido
                </Link>
                <Link
                  to="/"
                  className="text-[#E89B55] text-[15px] leading-none text-center"
                >
                  Continuar explorando
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  search={{
                    returnTo: '/nft/cart',
                    redirect: '/checkout',
                  }}
                  className="text-[#140D0A] w-full font-bold text-[15px] leading-4 h-10 bg-[#D28A4C] cursor-pointer hover:bg-[#D28A4C] rounded-md flex justify-center items-center"
                >
                  Conectar e finalizar
                </Link>
                <Link
                  to="/"
                  className="text-[#E89B55] text-[15px] leading-none text-center"
                >
                  Continuar explorando
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <CartCollection />
    </div>
  )
}

export default Cart
