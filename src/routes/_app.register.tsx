import Home from '#/components/layout/Home'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const registerSearchSchema = z.object({
  returnTo: z.string().default('/'),
  redirect: z.string().default(''),
})

type RegisterSearch = z.infer<typeof registerSearchSchema>

export const Route = createFileRoute('/_app/register')({
  validateSearch: (search) => registerSearchSchema.parse(search),
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
}
