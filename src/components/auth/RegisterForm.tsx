import { registerSchema } from '#/schemas/authSchema'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Field, FieldError, FieldGroup } from '../ui/field'
import { Input } from '../ui/input'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '../ui/button'
import { useRegister } from '#/hooks/use-auth'

const RegisterForm = () => {
  const { data: authResponse, mutate, isPending } = useRegister()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordInputType = () => {
    setShowPassword(!showPassword)
  }

  const { handleSubmit, control } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <p className="text-[13px] leading-4 text-[#F5F1EB] text-center py-6">
        Crie seu perfil de colecionador e conecte uma carteira quando quiser.
      </p>
      <FieldGroup>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <Input
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="Nome de usuário"
                className="h-10 placeholder:text-[#B0916A] leading-4 border-[#3F2319] focus-visible:border-[#D28A4C] bg-transparent text-[#F5F1EB]"
                type="text"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Digite seu e-mail"
                className="h-10 placeholder:text-[#B0916A] leading-4 border-[#3F2319] focus-visible:border-[#D28A4C] bg-transparent text-[#F5F1EB]"
                type="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <div className="flex items-center border border-[#3F2319] rounded-md h-10 focus-visible:border-[#D28A4C]">
                <Input
                  {...field}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Senha"
                  className="h-full placeholder:text-[#B0916A] leading-4 border-0  bg-transparent text-[#F5F1EB]"
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
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        className="bg-[#D28A4C] text-[#140D0A] text-base leading-4 font-bold h-11.25 hover:bg-[#D28A4C] cursor-pointer"
        type="submit"
        disabled={isPending ? true : false}
      >
        Criar conta
      </Button>
    </form>
  )
}

export default RegisterForm
