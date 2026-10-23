import Home from '#/components/layout/Home'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const loginSearchSchema = z.object({
  returnTo: z.string().default('/'),
  redirect: z.string().default(''),
})

type LoginSearch = z.infer<typeof loginSearchSchema>

export const Route = createFileRoute('/_app/login')({
  validateSearch: (search) => loginSearchSchema.parse(search),
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
}
