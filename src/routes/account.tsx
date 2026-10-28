import AccountSidebar from '#/components/layout/AccountSidebar'
import Header from '#/components/layout/Header'
import { requiredAuth } from '#/lib/requiredAuth'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/account')({
  beforeLoad: ({ context, location }) => requiredAuth({ context, location }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-8 font-mono w-300 mx-auto text-[#F5F1EB]">
      <Header />

      <div className="flex border-t border-t-[#D28A4C]/40"></div>

      <div className="flex gap-7 mt-8">
        <AccountSidebar />
        <Outlet />
      </div>
    </div>
  )
}
