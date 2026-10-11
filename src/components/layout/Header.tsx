import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-red-500">
      <div className="text-sm">KURIO</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex">
            <NavigationMenuLink>Início</NavigationMenuLink>
            <NavigationMenuLink>Mercado</NavigationMenuLink>
            <NavigationMenuLink>Criadores</NavigationMenuLink>
            <NavigationMenuLink>Aprenda</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>header actions</div>
    </header>
  )
}

export default Header
