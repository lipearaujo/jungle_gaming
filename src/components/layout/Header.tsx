import { LogIn, Search, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Form from '../auth/Form'
import { useCurrentUser, useLogout } from '#/hooks/use-auth'
import { getToken } from '#/utils/authStorage'

const linkOptions = [
  {
    name: 'Início',
    route: '/',
  },
] as const

const Header = () => {
  const { mutate, isPending: isLogoutPending } = useLogout()
  const { data, isPending: isUserPending } = useCurrentUser()
  const hasToken = !!getToken()
  const navigate = useNavigate()

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const isMarketActive = pathname.startsWith('/nft/')

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
            {pathname === link.route ? (
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
        <ShoppingCart size={20} className="cursor-pointer" />
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
          <Dialog>
            <DialogTrigger>
              <Button
                className="cursor-pointer w-25 text-black bg-[#D28A4C]"
                variant="header"
              >
                <LogIn />
                Entrar
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#241612] w-125 h-150 rounded-xl p-0">
              <Form />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </header>
  )
}

export default Header
