import * as z from 'zod'

export const checkoutSchema = z.object({
  nftId: z.string(),
  quantity: z.number().int().positive(),
})

export const checkoutSchemaArray = z.array(checkoutSchema)

export type checkoutItem = z.infer<typeof checkoutSchema>
export type CheckoutSchemaArray = z.infer<typeof checkoutSchemaArray>
