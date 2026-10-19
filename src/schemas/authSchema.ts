import * as z from 'zod'

export const registerSchema = z.object({
  name: z.string().trim().min(3, 'O nome deve conter pelo menos 3 caracteres.'),
  email: z
    .email({
      error: 'Informe um endereço de e-mail válido.',
    })
    .trim()
    .toLowerCase(),
  password: z.string().refine((val) => val.length >= 8 && /[\S]/.test(val), {
    message:
      'A senha deve ter pelo menos 8 caracteres e não pode conter apenas espaços.',
  }),
})

export const loginSchema = z.object({
  email: z
    .email({
      error: 'Informe um endereço de e-mail válido.',
    })
    .trim()
    .toLowerCase(),
  password: z.string().min(1, 'Informe sua senha.'),
})

export type RegisterRequest = z.infer<typeof registerSchema>
export type LoginRequest = z.infer<typeof loginSchema>
