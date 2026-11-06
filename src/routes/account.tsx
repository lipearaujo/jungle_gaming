import AccountSidebar from '#/components/layout/AccountSidebar'
import Header from '#/components/layout/Header'
import MobileFooter from '#/components/layout/MobileFooter'
import { requiredAuth } from '#/lib/requiredAuth'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/account')({
  beforeLoad: ({ context, location }) => requiredAuth({ context, location }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 font-mono w-full max-w-300 min-w-0 mx-auto text-[#F5F1EB]">
      <div className="hidden sm:block">
        <Header />
      </div>

      <div className="hidden sm:flex border-t border-t-[#D28A4C]/40"></div>

      <div className="flex max-sm:flex-col gap-7 sm:mt-8 mt-4">
        <AccountSidebar />
        <Outlet />
      </div>

      <MobileFooter />
    </div>
  )
}
