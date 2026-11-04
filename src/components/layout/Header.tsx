import {
  LogIn,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  X,
  User,
} from 'lucide-react'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useCurrentUser, useLogout } from '#/hooks/use-auth'
import { getToken } from '#/utils/authStorage'
import useCart from '#/hooks/use-cart'
import Form from '../auth/Form'
import { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import useMobileFilter from '#/hooks/use-mobileFilter'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
  const { setIsFilterOpen } = useMobileFilter()
  const hasToken = !!getToken()
  const navigate = useNavigate()
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>('')

  const { pathname, searchParams } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
      searchParams: state.location.search,
    }),
  })

  const handleShowSearch = () => {
    setIsShowSearch(!isShowSearch)
  }

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate({ to: '/', search: (prev) => ({ ...prev, search: inputText }) })
    setInputText('')
  }

  const isMarketActive = pathname.startsWith('/nft/')
  const isIndexActive =
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/account')

  return (
    <header className="sm:flex justify-between items-center h-11.25">
      <Link
        to="/"
        search={{
          search: '',
        }}
        className="hidden md:flex text-sm font-bold"
      >
        KURIO
      </Link>

      <nav className="hidden md:text-sm lg:text-base md:flex items-center justify-center gap-10 w-100.25 h-full">
        {linkOptions.map((link) => (
          <Link
            key={link.name}
            to={link.route}
            search={{
              search: '',
            }}
            className={`md:text-sm lg:text-base leading-none ${pathname === link.route ? 'text-[#E89B55] font-bold' : 'text-[#F5F1EB] font-normal'}`}
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
          className={`leading-none ${isMarketActive ? 'text-[#E89B55]' : 'text-[#F5F1EB]'}`}
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

      <div className="xl:relative h-full flex justify-between md:gap-6 gap-2 items-center">
        <form
          action=""
          onSubmit={onSubmit}
          className={`hidden max-sm:flex max-sm:w-full h-8.75 xl:absolute ${hasToken && data ? 'right-25' : 'right-40'} xl:flex items-center gap-3 rounded-lg ${isShowSearch ? 'xl:border xl:border-[#D28A4C]' : ''}`}
        >
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onBlur={() => setIsShowSearch(false)}
            className={`max-sm:w-full max-sm:h-full pl-9 xl:pl-3 xl:h-full xl:placeholder-transparent xl:w-0 border-none bg-[#241612] xl:bg-transparent ${isShowSearch ? 'xl:w-54 transition-all duration-300 ease-in-out' : 'w-0 transition-all duration-300 ease-in-out '}`}
            placeholder="Explorar coleções"
          />
          <Button
            type="button"
            className="cursor-pointer hover:bg-transparent bg-transparent hidden xl:block"
            onClick={handleShowSearch}
          >
            {isShowSearch ? (
              <X color="white" size={20} />
            ) : (
              <Search size={20} className="text-[#B39463] xl:text-[#F5F1EB]" />
            )}
          </Button>
        </form>

        <Button
          className="md:hidden w-11.25 h-11.25 bg-linear-to-r from-[#D28A4C]/45 to-[#D28A4C] rounded-2xl"
          onClick={() => setIsFilterOpen(true)}
        >
          <SlidersHorizontal color="black" size={22} />
        </Button>

        <Link
          to="/nft/cart"
          search={{
            search: '',
          }}
        >
          <ShoppingCart size={20} className="hidden sm:block cursor-pointer" />
          <div className="hidden w-4 h-4 rounded-full bg-[#D28A4C] text-[10px] text-[#140D0A] sm:flex items-center justify-center font-medium -mt-3.75 relative -top-2.5 -right-2.5">
            {totalItems}
          </div>
        </Link>

        {hasToken && data ? (
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  className="border-0 bg-transparent hover:bg-[#140d0a] hover:text-white cursor-pointer max-sm:hidden"
                >
                  <User className="size-6" />
                </Button>
              }
            />
            <DropdownMenuContent className="w-40" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link to="/account/profile">Dados do Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/account/wallets">Carteiras</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Button
                    className="hidden md:block cursor-pointer text-black bg-transparent"
                    variant="header"
                    onClick={() =>
                      mutate(undefined, {
                        onSuccess: () => {
                          navigate({ to: '/', search: { search: '' } })
                        },
                      })
                    }
                    disabled={isLogoutPending}
                  >
                    {isLogoutPending ? 'Saindo...' : 'Sair'}
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="hidden md:block">
            <Link
              to="/login"
              search={{
                returnTo: pathname || '/',
                redirect: '/',
                search: '',
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
              <DialogContent className="bg-[#140D0A] sm:bg-[#241612] w-125 h-150 rounded-xl p-0 max-sm:fixed max-sm:inset-0 max-sm:left-0 max-sm:top-0 max-sm:translate-x-0 max-sm:translate-y-0 max-sm:w-screen max-sm:h-dvh max-sm:max-w-none max-sm:rounded-none max-sm:border-0 max-sm:p-4">
                <Form
                  pathname={pathname}
                  searchParams={{
                    returnTo: searchParams.returnTo ?? '/',
                    redirect: searchParams.redirect ?? '/',
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
