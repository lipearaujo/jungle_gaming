import useCart from '#/hooks/use-cart'
import { useCheckout } from '#/hooks/use-checkout'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Textarea } from '../ui/textarea'

const selectInputItems = [
  { label: 'Selecione uma rede', value: null },
  { label: 'ETH', value: 'eth' },
  { label: 'POL', value: 'pol' },
  { label: 'SOL', value: 'sol' },
]

const Checkout = () => {
  const { items, totalPrice } = useCart()
  const { mutateAsync, isPending } = useCheckout()
  const navigate = useNavigate()

  const handleCheckout = async () => {
    const purchasedItems = items.map((item) => {
      return { nftId: item.id, quantity: item.quantity }
    })

    const purchased = await mutateAsync(purchasedItems)
    navigate({ to: `/purchases/${purchased.id}` })
  }

  return (
    <div className="flex flex-col gap-3 mt-8">
      <p className="text-[15px] text-[#F5F1EB] leading-4 font-bold">
        Início / Mercado / Carrinho
      </p>

      <div className="mt-8 flex gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-[17px] text-[#F5F1EB] leading-4 font-bold">
            Perfil do colecionador
          </p>

          <div className="flex gap-6 mt-3">
            <div className="flex flex-col gap-3">
              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Nome de exibição <span className="text-[#F0805F]">*</span>
              </Label>
              <Input
                type="text"
                className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
              />

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Rede <span className="text-[#F0805F]">*</span>
              </Label>
              <div className="h-10 border border-[#3F2319] rounded-md">
                <Select
                  items={selectInputItems}
                  defaultValue={'Selecione uma rede'}
                >
                  <SelectTrigger className="w-[369.5px] h-10 bg-transparent border-none text-[#B39463]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {selectInputItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Endereço de carteira <span className="text-[#F0805F]">*</span>
              </Label>
              <Input
                type="text"
                className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 placeholder:text-[#B39463] focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
                placeholder="Endereço 0x da carteira"
              />

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Tipo de carteira <span className="text-[#F0805F]">*</span>
              </Label>
              <div className="h-10 border border-[#3F2319] rounded-md">
                <Select
                  items={selectInputItems}
                  defaultValue={'Selecione uma carteira'}
                >
                  <SelectTrigger className="w-[369.5px] h-full bg-transparent border-none text-[#B39463]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {selectInputItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                E-mail <span className="text-[#F0805F]">*</span>
              </Label>
              <Input
                type="email"
                className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Nome de usuário <span className="text-[#F0805F]">*</span>
              </Label>
              <Input
                type="text"
                className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
              />

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Nome do perfil <span className="text-[#F0805F]">*</span>
              </Label>
              <Input
                type="text"
                className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
              />

              <div className="text-[15px] leading-4 text-[#F5F1EB] p-2"></div>
              <Input
                type="text"
                className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 placeholder:text-[#B39463] focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
                placeholder="ENS ou carteira secundária (opcional)"
              />

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Código de indicação <span className="text-[#F0805F]">*</span>
              </Label>
              <Input
                type="text"
                className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
              />

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Nome ENS <span className="text-[#F0805F]">*</span>
              </Label>
              <div className="w-19.5 h-10 border border-[#3F2319] rounded-md">
                <Select
                  items={selectInputItems}
                  defaultValue={'Selecione uma carteira'}
                >
                  <SelectTrigger className="w-full h-10 bg-transparent border-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {selectInputItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <RadioGroup className="w-fit">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="anotherWallet"
                  id="r1"
                  className="border-2 border-[#D28A4C]"
                />
                <Label
                  htmlFor="r1"
                  className="text-[#F5F1EB] text-[15px] leading-none font-normal"
                >
                  Usar outra carteira?
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mt-3">
            <Textarea className="w-87.5 border border-[#3F2319] bg-transparent outline-none" />
          </div>
        </div>

        <div className="w-101.25 flex flex-col gap-3">
          <p className="text-[17px] text-[#F5F1EB] leading-4 font-bold">
            Seus NFTs
          </p>

          <div className=" py-3 border-b border-b-[#D28A4C]/30">
            <div className="flex items-center justify-between">
              <p className="text-[#F5F1EB] text-base leading-4 font-bold">
                NFTs
              </p>
              <p className="text-[#F5F1EB] text-base leading-4 font-medium">
                Subtotal
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div className="bg-[#241612] h-17.5 flex justify-around gap-2">
                <div className="w-17.5 h-full">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-1.5 justify-center">
                  <p className="text-[#F5F1EB] font-bold leading-4 text-base">
                    {item.name}
                  </p>
                  <p className="text-sm text-[#B39463] leading-4 font-normal">
                    ID do token: #
                    {item.id.slice(item.id.length - 3, item.id.length)}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-[#B39463] leading-4 font-normal">
                    (x {item.quantity})
                  </p>
                  <p className="text-[#E89B55] text-lg font-bold leading-4">
                    {Number(item.price) * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#F5F1EB] text-sm text-center">
              Tem um código promocional? Aplique aqui
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[#F5F1EB] leading-none text-[15px] text-center">
                  Subtotal
                </p>
                <p className="text-[#F5F1EB] leading-4 text-lg text-center">
                  {totalPrice.toFixed(2)} ETH
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#F5F1EB] leading-none text-[15px] text-center">
                  Desconto do lançamento
                </p>
                <p className="text-[#F5F1EB] leading-none text-[15px] text-center">
                  (-) 00.00
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#F5F1EB] leading-none text-[15px] text-center">
                  Taxa de rede
                </p>
                <p className="text-[#F5F1EB] leading-none text-[15px] text-center">
                  0.016 ETH
                </p>
              </div>
            </div>
            <p className="text-[#E89B55] text-[12px] leading-4 text-center">
              Taxa estimada
            </p>
            <div className="border-t border-t-[#D28A4C]/30 flex justify-center items-center p-3">
              <div className="flex justify-between items-center w-80.25">
                <p className="text-[#F5F1EB] font-bold leading-4 text-base">
                  Total
                </p>
                <p className="text-[#E89B55] font-bold leading-4 text-lg">
                  {(totalPrice + 0.016).toFixed(3)} ETH
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[17px] text-[#F5F1EB] text-center font-bold leading-4">
              Carteira e rede
            </p>
            <div className="flex flex-col gap-3">
              <div className="h-10 border border-[#3F2319] flex items-center p-3">
                <RadioGroup className="w-fit">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="anotherWallet"
                      id="r1"
                      className="border-2 border-[#D28A4C]"
                    />
                    <Label
                      htmlFor="r1"
                      className="text-[#F5F1EB] text-[15px] leading-none font-normal"
                    >
                      <div className="bg-[#38220F] w-fit p-2 border border-[#55321F] h-6.5 rounded-md flex items-center justify-center">
                        <span className="font-bold text-[9px] text-[#E89B55]">
                          METAMASK • WALLETCONNECT • COINBASE
                        </span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="h-10 border border-[#3F2319] flex items-center p-3">
                <RadioGroup className="w-fit">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="anotherWallet"
                      id="r1"
                      className="border-2 border-[#D28A4C]"
                    />
                    <Label
                      htmlFor="r1"
                      className="text-[#F5F1EB] text-[15px] leading-none font-normal"
                    >
                      MetaMask
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="h-10 border border-[#3F2319] flex items-center p-3">
                <RadioGroup className="w-fit">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="anotherWallet"
                      id="r1"
                      className="border-2 border-[#D28A4C]"
                    />
                    <Label
                      htmlFor="r1"
                      className="text-[#F5F1EB] text-[15px] leading-none font-normal"
                    >
                      Coinbase Wallet
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              disabled={isPending}
              className="bg-[#D28A4C] h-11.25 text-[#140D0A] font-bold text-[15px] leading-4 hover:bg-[#D28A4C] cursor-pointer"
            >
              Confirmar compra
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
