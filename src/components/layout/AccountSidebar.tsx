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
    <div className="sm:w-77.5 w-full h-full sm:bg-[#241612] sm:py-2">
      <h3 className="text-[#F5F1EB] text-lg leading-4 font-bold p-2.5 hidden sm:block">
        Meu Perfil
      </h3>

      <nav className="flex sm:flex-col gap-3 max-sm:justify-between h-full">
        {linkOptions.map((link) => (
          <Link
            key={link.name}
            to={link.route}
            className={`sm:p-2 text-[13px] sm:text-[15px] text-[#E89B55] flex gap-4 items-center ${pathname === link.route ? 'border-b border-b-[#D28A4C] sm:border-l-5 border-l-[#D28A4C] sm:border-b-0' : 'sm:border-l-5 border-l-[#241612]'}`}
          >
            <span className="hidden sm:block">{link.icon}</span>
            {link.name}
          </Link>
        ))}
        <div className="sm:border-t border-t-[#D28A4C]/30 h-full">
          <Button
            onClick={() =>
              mutate(undefined, {
                onSuccess: () => {
                  navigate({ to: '/', search: { search: '' } })
                },
              })
            }
            disabled={isLogoutPending}
            className="sm:p-4 flex gap-4 justify-start w-full bg-transparent h-11.25 hover:bg-transparent cursor-pointer items-center text-[#E89B55] font-bold text-[15px] "
          >
            <span className="hidden sm:block">
              <LogOut size={15} />
            </span>
            {isLogoutPending ? 'Saindo...' : 'Sair'}
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default AccountSidebar
