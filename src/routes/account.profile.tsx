import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { createFileRoute } from '@tanstack/react-router'
import { Eye, EyeOff, FileImage } from 'lucide-react'
import { useState } from 'react'

const selectInputItems = [
  { label: 'Selecione uma rede', value: null },
  { label: 'ETH', value: 'eth' },
  { label: 'POL', value: 'pol' },
  { label: 'SOL', value: 'sol' },
]

export const Route = createFileRoute('/account/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordInputType = () => {
    setShowPassword(!showPassword)
  }

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
            E-mail <span className="text-[#F0805F]">*</span>
          </Label>
          <Input
            type="email"
            className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
          />

          <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
            Apelido da carteira <span className="text-[#F0805F]">*</span>
          </Label>
          <Input
            type="text"
            className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 placeholder:text-[#B39463] focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
          />

          <div className="mt-6 flex flex-col gap-3">
            <p>Alterar senha</p>
            <div className="flex flex-col gap-5">
              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Senha atual
              </Label>
              <div className="flex items-center border border-[#3F2319] rounded-md h-10 focus-visible:border-[#D28A4C]">
                <Input
                  id="password"
                  placeholder="Senha"
                  className="h-full  placeholder:text-[#B0916A] leading-4 border-0  bg-transparent text-[#F5F1EB]"
                  type={`${showPassword ? 'text' : 'password'}`}
                />
                {showPassword ? (
                  <Button
                    className="hover:bg-transparent text-xl bg-transparent cursor-pointer p-2 flex items-center justify-center"
                    type="button"
                    onClick={togglePasswordInputType}
                  >
                    <Eye color="#B0916A" />
                  </Button>
                ) : (
                  <Button
                    className="hover:bg-transparent text-xl bg-transparent cursor-pointer p-2 flex items-center justify-center"
                    type="button"
                    onClick={togglePasswordInputType}
                  >
                    <EyeOff color="#B0916A" />
                  </Button>
                )}
              </div>

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Nova senha
              </Label>
              <div className="flex items-center border border-[#3F2319] rounded-md h-10 focus-visible:border-[#D28A4C]">
                <Input
                  id="password"
                  placeholder="Senha"
                  className="h-full  placeholder:text-[#B0916A] leading-4 border-0  bg-transparent text-[#F5F1EB]"
                  type={`${showPassword ? 'text' : 'password'}`}
                />
                {showPassword ? (
                  <Button
                    className="hover:bg-transparent text-xl bg-transparent cursor-pointer p-2 flex items-center justify-center"
                    type="button"
                    onClick={togglePasswordInputType}
                  >
                    <Eye color="#B0916A" />
                  </Button>
                ) : (
                  <Button
                    className="hover:bg-transparent text-xl bg-transparent cursor-pointer p-2 flex items-center justify-center"
                    type="button"
                    onClick={togglePasswordInputType}
                  >
                    <EyeOff color="#B0916A" />
                  </Button>
                )}
              </div>

              <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
                Confirmar nova senha
              </Label>
              <div className="flex items-center border border-[#3F2319] rounded-md h-10 focus-visible:border-[#D28A4C]">
                <Input
                  id="password"
                  placeholder="Senha"
                  className="h-full  placeholder:text-[#B0916A] leading-4 border-0  bg-transparent text-[#F5F1EB]"
                  type={`${showPassword ? 'text' : 'password'}`}
                />
                {showPassword ? (
                  <Button
                    className="hover:bg-transparent text-xl bg-transparent cursor-pointer p-2 flex items-center justify-center"
                    type="button"
                    onClick={togglePasswordInputType}
                  >
                    <Eye color="#B0916A" />
                  </Button>
                ) : (
                  <Button
                    className="hover:bg-transparent text-xl bg-transparent cursor-pointer p-2 flex items-center justify-center"
                    type="button"
                    onClick={togglePasswordInputType}
                  >
                    <EyeOff color="#B0916A" />
                  </Button>
                )}
              </div>

              <Button className="bg-[#D28A4C] w-32.75 h-10 hover:bg-[#D28A4C] cursor-pointer text-[#140D0A] font-bold text-sm leading-4 mt-3">
                Salvar
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
            Nome de usuário <span className="text-[#F0805F]">*</span>
          </Label>
          <Input
            type="text"
            className="border border-[#3F2319] bg-transparent w-[369.5px] h-10 focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
          />

          <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
            Nome ENS <span className="text-[#F0805F]">*</span>
          </Label>
          <div className="flex gap-3">
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

            <Input
              type="text"
              className="border border-[#3F2319] bg-transparent h-10 focus-visible:ring-2 focus-visible:ring-[#D28A4C]"
            />
          </div>

          <Label className="text-[15px] font-normal leading-4 text-[#F5F1EB]">
            Avatar
          </Label>
          <div className="flex items-center justify-start gap-3 ">
            <div className="bg-[#2F1D15] border border-[#3F2319] w-12.5 h-12.5 rounded-full flex items-center justify-center">
              <FileImage color="#D28A4C" />
            </div>

            <Button className="rounded-md bg-[#D28A4C] hover:bg-[#D28A4C] text-[#140D0A] font-bold text-sm cursor-pointer">
              Alterar
            </Button>
            <Button className="rounded-md bg-transparent hover:bg-transparent cursor-pointer">
              Remover
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
