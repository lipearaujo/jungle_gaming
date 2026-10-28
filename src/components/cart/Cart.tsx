import { ChevronLeft, Trash } from 'lucide-react'
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
import { Link, useRouter } from '@tanstack/react-router'
import CartCollection from './CartCollection'
import useCart from '#/hooks/use-cart'
import { useCurrentUser } from '#/hooks/use-auth'

const Cart = () => {
  const { data: user } = useCurrentUser()
  const { items, incrementItem, decrementItem, removeItem, totalPrice } =
    useCart()
  const router = useRouter()

  const handleGoBack = () => {
    if (router.history.canGoBack()) {
      router.history.back()
    } else {
      router.navigate({ to: '/', search: { search: '' } })
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:mt-8">
      <p className="hidden sm:block text-[15px] text-[#F5F1EB] leading-4 font-bold">
        Início / Mercado / Carrinho
      </p>

      <div className="sm:hidden flex items-center">
        <Button
          onClick={handleGoBack}
          size="icon-lg"
          variant="default"
          className="w-8.75 h-8.75 rounded-full bg-[#3F2319] p-0 m-0"
        >
          <ChevronLeft color="#B39463" size={20} />
        </Button>
        <p className="text-xl text-[#F5F1EB] leading-4 font-bold mx-auto">
          Carrinho de NFTs
        </p>
      </div>

      <div className="flex max-sm:flex-col justify-between sm:gap-8">
        <Table className="w-full table-fixed sm:grow sm:w-auto min-w-0 sm:-mt-3 border-separate border-spacing-y-3">
          <TableHeader className="hidden sm:table-header-group">
            <TableRow>
              <TableHead className="text-[#F5F1EB] w-62.5 font-bold text-base leading-4 border-b border-b-[#D28A4C]/30 pb-3">
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
          <TableBody className="">
            {items.map((item) => (
              <TableRow className="bg-[#241612]">
                <TableCell className="max-sm:rounded-l-xl p-0 min-w-0">
                  <div className="flex items-center gap-4">
                    <div className="w-17.5 h-17.5 shrink-0 rounded-l-xl">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="sm:rounded-xl rounded-l-xl w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 justify-center min-w-0">
                      <p className="text-[#F5F1EB] text-[15px] sm:text-base leading-4 wrap-break-word font-bold">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#B39463] leading-4">
                        ID do token: #
                        {item.id.slice(item.id.length - 3, item.id.length)}
                      </p>
                      <p className="sm:hidden font-bold text-sm text-[#E89B55] justify-end leading-4">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell text-center text-[#CFB28C] font-bold text-base leading-4">
                  {item.price}
                </TableCell>
                <TableCell className="text-center rounded-r-xl sm:rounded-none pl-20 sm:pl-0">
                  <div className="flex justify-center items-center gap-3 ">
                    <Button
                      onClick={() => {
                        decrementItem(item.id)
                      }}
                      className="sm:bg-[#D28A4C] bg-[#2F1D15] border border-[#3F2319] sm:border-none w-6 h-6 rounded-full sm:w-5 sm:h-7.5 sm:text-black text-base hover:bg-[#D28A4C] cursor-pointer"
                    >
                      -
                    </Button>
                    <span className="text-[#F5F1EB] text-[17px] leading-7 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      onClick={() => {
                        incrementItem(item.id)
                      }}
                      className="sm:bg-[#D28A4C] bg-[#2F1D15] border border-[#3F2319] sm:border-none w-6 h-6 rounded-full  sm:w-5 sm:h-7.5 sm:text-black text-base hover:bg-[#D28A4C] cursor-pointer"
                    >
                      +
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell text-center text-[#E89B55] font-bold text-base leading-4">
                  {(Number(item.price) * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Button
                    onClick={() => removeItem(item.id)}
                    className="p-0 bg-transparent w-full hover:bg-transparent transition-none cursor-pointer"
                  >
                    <Trash color="#B39463" className="size-5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="max-sm:-mb-4 max-sm:-mx-4 max-sm:p-4 sm:w-83 flex flex-col gap-6 max-sm:bg-[#241612] rounded-t-[40px]">
          <div className="hidden sm:flex flex-col gap-3">
            <p className="text-[#F5F1EB] font-bold text-lg leading-4">
              Resumo da carteira
            </p>
            <div className="border-t border-t-[#D28A4C]/30"></div>
          </div>
          <div className="flex flex-col  gap-2 w-full">
            <p className="hidden sm:block text-[#F5F1EB] font-bold text-sm leading-4">
              Código promocional
            </p>
            <div className="flex w-full border h-12.5 sm:h-10 border-[#3F2319] sm:border-[#D28A4C] rounded-full sm:rounded-md">
              <Input
                className="flex-1 h-full placeholder:text-[#B0916A] border-0 leading-4 text-[13px] sm:text-base bg-transparent text-[#F5F1EB]"
                placeholder="Digite o código promocional..."
              />
              <Button className="w-24.25 h-full rounded-full text-[#F5F1EB] sm:rounded-none cursor-pointer border border-[#D28A4C] text-[15px] leading-4 font-bold sm:text-black sm:w-25.5 sm:h-10 bg-[#D28A4C] hover:bg-[#D28A4C]">
                Aplicar
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between">
              <p className="text-[#F5F1EB] leading-none text-[15px]">
                Subtotal
              </p>
              <p className="text-[#F5F1EB] leading-4 text-lg">
                {totalPrice.toFixed(2)} ETH
              </p>
            </div>
            <div className="flex justify-between w-full">
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
          <div className="flex flex-col gap-3 w-full">
            {user ? (
              <>
                <Link
                  to="/nft/checkout"
                  search={{ search: '' }}
                  className="text-[#140D0A] font-bold text-[15px] leading-4 h-15 sm:h-10 bg-[#D28A4C] cursor-pointer hover:bg-[#D28A4C] rounded-full sm:rounded-md flex justify-center items-center"
                >
                  Finalizar Pedido
                </Link>
                <Link
                  to="/"
                  search={{ search: '' }}
                  className="hidden sm:block text-[#E89B55] text-[15px] leading-none text-center"
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
                    search: '',
                  }}
                  className="text-[#140D0A] w-full font-bold text-[15px] leading-4 h-15 sm:h-10 bg-[#D28A4C] cursor-pointer hover:bg-[#D28A4C] rounded-full sm:rounded-md flex justify-center items-center"
                >
                  Conectar e finalizar
                </Link>
                <Link
                  to="/"
                  search={{
                    search: '',
                  }}
                  className="hidden sm:block text-[#E89B55] text-[15px] leading-none text-center"
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
