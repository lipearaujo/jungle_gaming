import * as z from 'zod'

export const storedUserSchema = z.object({
  id: z.string(),
  name: z.string().trim().min(3),
  email: z.email(),
  salt: z.string(),
  passwordHash: z.string(),
})

export const storedUserSchemaArray = z.array(storedUserSchema)

export type StoredUserSchema = z.infer<typeof storedUserSchema>
export type StoredUserSchemaArray = z.infer<typeof storedUserSchemaArray>
