import { LogIn, Search, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { Dialog, DialogContent } from '@/components/ui/dialog'

import { useCurrentUser, useLogout } from '#/hooks/use-auth'
import { getToken } from '#/utils/authStorage'
import useCart from '#/hooks/use-cart'
import Form from '../auth/Form'

const linkOptions = [
  {
    name: 'Início',
    route: '/',
  },
] as const

const Header = () => {
  const { mutate, isPending: isLogoutPending } = useLogout()
  const { data } = useCurrentUser()
  const { totalItems } = useCart()
  const hasToken = !!getToken()
  const navigate = useNavigate()

  const { pathname, searchParams } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
      searchParams: state.location.search,
    }),
  })

  const isMarketActive = pathname.startsWith('/nft/')
  const isIndexActive =
    pathname.startsWith('/login') || pathname.startsWith('/register')

  return (
    <header className="flex justify-between items-center h-11.25">
      <Link to="/" className="text-sm font-bold">
        KURIO
      </Link>

      <nav className="w-100.25 h-full flex items-center justify-center gap-10">
        {linkOptions.map((link) => (
          <Link
            key={link.name}
            to={link.route}
            className={`text-base leading-none ${pathname === link.route ? 'text-[#E89B55] font-bold' : 'text-[#F5F1EB] font-normal'}`}
          >
            {link.name}
            {pathname === link.route || isIndexActive ? (
              <div className="h-0.5 bg-[#D28A4C] relative top-3.5"></div>
            ) : (
              ''
            )}
          </Link>
        ))}

        <span
          className={`text-base leading-none ${isMarketActive ? 'text-[#E89B55]' : 'text-[#F5F1EB]'}`}
        >
          Mercado
          {isMarketActive ? (
            <div className="h-0.5 bg-[#D28A4C] relative top-3.5"></div>
          ) : (
            ''
          )}
        </span>

        <span className="text-[#F5F1EB]">Criadores</span>

        <span className="text-[#F5F1EB]">Aprenda</span>
      </nav>

      <div className="w-51.75 h-8.75 flex justify-between items-center">
        <Search size={20} className="cursor-pointer" />
        <Link to="/nft/cart">
          <ShoppingCart size={20} className="cursor-pointer" />
          <div className="w-4 h-4 rounded-full bg-[#D28A4C] text-[10px] text-[#140D0A] flex items-center justify-center font-medium mt-[-15px] relative top-[-10px] right-[-10px]">
            {totalItems}
          </div>
        </Link>

        {hasToken && data ? (
          <Button
            className="cursor-pointer w-25 text-black bg-[#D28A4C]"
            variant="header"
            onClick={() =>
              mutate(undefined, {
                onSuccess: () => {
                  navigate({ to: '/' })
                },
              })
            }
            disabled={isLogoutPending}
          >
            {isLogoutPending ? 'Saindo...' : 'Sair'}
          </Button>
        ) : (
          <>
            <Link
              to="/login"
              search={{
                returnTo: pathname || '/',
                redirect: '/',
              }}
              className="flex items-center justify-center gap-1 cursor-pointer w-25 h-8.75 text-base rounded-md text-black bg-[#D28A4C]"
            >
              <LogIn size={16} />
              Entrar
            </Link>

            <Dialog
              open={pathname === '/login' || pathname === '/register'}
              onOpenChange={(open) => {
                if (!open) {
                  navigate({ to: searchParams.returnTo || '/' })
                }
              }}
            >
              <DialogContent className="bg-[#241612] w-125 h-150 rounded-xl p-0">
                <Form
                  pathname={pathname}
                  searchParams={{
                    returnTo: searchParams.returnTo ?? '/',
                    redirect: searchParams.redirect ?? '/',
                  }}
                />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
