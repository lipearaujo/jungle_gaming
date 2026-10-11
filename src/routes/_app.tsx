import Header from '#/components/layout/Header'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({ component: Home })

function Home() {
  /* 
    Services: fazem as requisições HTTP.
    Hooks: conectam os services ao TanStack Query.
    Componentes: consomem os dados e exibem a interface.
  */

  return (
    <div className="p-8 bg-[#140D0A] w-screen h-screen">
      <div className="w-300 mx-auto text-[#F5F1EB]">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
