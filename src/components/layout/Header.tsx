import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { LogIn, Search, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
    <header className="flex justify-between items-center h-11.25">
      <Link to="/" className="text-sm font-bold">
        KURIO
      </Link>
      <nav className="w-100.25 h-full flex items-center justify-center">
        <NavigationMenu className="h-full">
          <NavigationMenuList className="h-full">
            <NavigationMenuItem className="flex gap-9 h-full">
              <NavigationMenuLink
                render={<Link to="/"></Link>}
                className="text-[16px]"
              >
                Início
              </NavigationMenuLink>
              <NavigationMenuLink
                render={<Link to="/"></Link>}
                className="text-[16px]"
              >
                Mercado
              </NavigationMenuLink>
              <NavigationMenuLink
                render={<Link to="/"></Link>}
                className="text-[16px]"
              >
                Criadores
              </NavigationMenuLink>
              <NavigationMenuLink
                render={<Link to="/"></Link>}
                className="text-[16px]"
              >
                Aprenda
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
