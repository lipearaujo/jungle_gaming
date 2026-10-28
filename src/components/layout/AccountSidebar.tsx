import { useLogout } from '#/hooks/use-auth'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { LogOut, MapPin, User } from 'lucide-react'
import { Button } from '../ui/button'

const linkOptions = [
  {
    name: 'Dados do Perfil',
    route: '/account/profile',
    icon: <User size={15} />,
  },
  {
    name: 'Carteiras',
    route: '/account/wallets',
    icon: <MapPin size={15} />,
  },
]

const AccountSidebar = () => {
  const { mutate, isPending: isLogoutPending } = useLogout()
  const navigate = useNavigate()
  const { pathname } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
    }),
  })

  return (
    <div className="w-77.5 h-full bg-[#241612] py-2">
      <h3 className="text-[#F5F1EB] text-lg leading-4 font-bold p-2.5">
        Meu Perfil
      </h3>

      <nav className="flex flex-col gap-3 h-full">
        {linkOptions.map((link) => (
          <Link
            key={link.name}
            to={link.route}
            className={`p-2 text-[15px] text-[#E89B55] flex gap-4 items-center ${pathname === link.route ? 'border-l-5 border-l-[#D28A4C] ' : 'border-l-5 border-l-[#241612]'}`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
        <div className="border-t border-t-[#D28A4C]/30 h-full">
          <Button
            onClick={() =>
              mutate(undefined, {
                onSuccess: () => {
                  navigate({ to: '/' })
                },
              })
            }
            disabled={isLogoutPending}
            className="p-4 flex gap-4 justify-start w-full bg-transparent h-11.25 hover:bg-transparent cursor-pointer items-center text-[#E89B55] font-bold text-[15px] "
          >
            <LogOut size={15} />
            {isLogoutPending ? 'Saindo...' : 'Sair'}
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default AccountSidebar
