import { LogIn, Search, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import { Link, useRouterState } from '@tanstack/react-router'

const Header = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const isMarketActive = pathname === '/market' || pathname.startsWith('/nft/')

  return (
    <header className="flex justify-between items-center h-11.25">
      <Link to="/" className="text-sm font-bold">
        KURIO
      </Link>

      <nav className="w-100.25 h-full flex items-center justify-center gap-10">
        <Link
          to="/"
          activeProps={{
            className: 'text-[#E89B55] border-b-2 border-b-[#E89B55]',
          }}
          inactiveProps={{
            className: 'text-[#F5F1EB]',
          }}
        >
          Início
        </Link>

        <Link
          to="/market"
          className={`text-base ${isMarketActive ? 'text-[#E89B55] border-b-2 border-b-[#E89B55]' : 'text-[#F5F1EB] border-0'}`}
        >
          Mercado
        </Link>

        <span className="text-[#F5F1EB]">Criadores</span>

        <span className="text-[#F5F1EB]">Aprenda</span>
      </nav>

      <div className="w-51.75 h-8.75 flex justify-between items-center">
        <Search size={20} className="cursor-pointer" />
        <ShoppingCart size={20} className="cursor-pointer" />
        <Button
          className="cursor-pointer w-25 text-black bg-[#D28A4C]"
          variant="header"
        >
          <LogIn />
          Entrar
        </Button>
      </div>
    </header>
  )
}

export default Header
