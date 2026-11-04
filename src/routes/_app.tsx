import Footer from '#/components/layout/Footer'
import Header from '#/components/layout/Header'
import { Outlet, createFileRoute, useRouterState } from '@tanstack/react-router'
import { z } from 'zod'

const inputSearchSchema = z.object({
  search: z.string().default(''),
})

//type InputSearchSchema = z.infer<typeof inputSearchSchema>

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
    <div className="p-4 sm:p-6 lg:p-8 font-mono">
      <div className="w-full max-w-300 min-w-0 mx-auto text-[#F5F1EB]">
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
