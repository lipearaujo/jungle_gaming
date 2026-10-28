import Footer from '#/components/layout/Footer'
import Header from '#/components/layout/Header'
import { Outlet, createFileRoute, useRouterState } from '@tanstack/react-router'
import { z } from 'zod'

const inputSearchSchema = z.object({
  search: z.string().default(''),
})

type InputSearchSchema = z.infer<typeof inputSearchSchema>

export const Route = createFileRoute('/_app')({
  validateSearch: (search) => inputSearchSchema.parse(search),
  component: Home,
})

function Home() {
  const { pathname } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
    }),
  })

  return (
    <div className="sm:p-8 p-4 font-mono">
      <div className="sm:w-300 w-full mx-auto text-[#F5F1EB]">
        <div className={pathname === '/' ? '' : 'hidden sm:block'}>
          <Header />
        </div>

        <Outlet />

        <div className={pathname === '/' ? '' : 'hidden sm:block'}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
