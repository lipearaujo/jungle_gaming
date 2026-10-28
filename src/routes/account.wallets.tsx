import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { RadioGroup, RadioGroupItem } from '#/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/account/wallets')({
  component: RouteComponent,
})

const selectInputItems = [
  { label: 'Selecione uma rede', value: null },
  { label: 'ETH', value: 'eth' },
  { label: 'POL', value: 'pol' },
  { label: 'SOL', value: 'sol' },
]

function RouteComponent() {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-bold text-base leading-4 text-[#F5F1EB]">
        Perfil do colecionador
      </p>

      <div className="flex gap-6 mt-3">
        <div className="flex flex-col gap-5">
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
            <Select defaultValue={'Selecione uma carteira'}>
              <SelectTrigger className="w-[369.5px] h-full bg-transparent border-none text-[#B39463]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    key="Selecione uma carteira"
                    value="Selecione uma carteira"
                  >
                    Selecione uma carteira
                  </SelectItem>
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

          <Button className="bg-[#D28A4C] w-32.75 h-10 hover:bg-[#D28A4C] cursor-pointer text-[#140D0A] font-bold text-sm leading-4 mt-3">
            Salvar carteira
          </Button>
        </div>

        <div className="flex flex-col gap-5">
          <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
            Apelido da carteira <span className="text-[#F0805F]">*</span>
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

      <div className="flex flex-col gap-3 mt-3">
        <div className="flex justify-between gap-3">
          <p className="text-[#F5F1EB] font-bold text-lg leading-4">
            Carteira secundária
          </p>

          <div className="flex 3">
            <RadioGroup className="w-fit">
              <div className="flex gap-3">
                <RadioGroupItem
                  value="anotherWallet"
                  id="r1"
                  className="border-2 border-[#D28A4C]"
                />
                <Label
                  htmlFor="r1"
                  className="text-[#F5F1EB] text-sm leading-4 font-normal"
                >
                  Igual à carteira principal{' '}
                  <span className="text-[#E89B55]">Adicionar</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <p className="text-[#CFB28C] text-sm leading-3.5">
          Você ainda não adicionou uma carteira secundária.
        </p>
      </div>
    </div>
  )
}
