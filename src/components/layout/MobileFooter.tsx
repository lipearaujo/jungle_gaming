import { useEffect } from 'react'
import { useCurrentUser, useLogout } from '#/hooks/use-auth'
import { getToken } from '#/utils/authStorage'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { Heart, House, ShoppingCart, User } from 'lucide-react'

const linkOptions = [
  {
    route: '/',
    icon: <House size={25} />,
  },
  /*   {
    route: '/',
    icon: <Heart size={25} />,
  }, */
  {
    route: '/nft/cart',
    icon: <ShoppingCart size={25} />,
  },
  {
    route: '/account/profile',
    icon: <User size={25} />,
  },
] as const

const MobileFooter = () => {
  //const { mutate, isPending: isLogoutPending } = useLogout()
  const { data } = useCurrentUser()
  const hasToken = !!getToken()
  const navigate = useNavigate()

  const { pathname } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
    }),
  })

  useEffect(() => {
    if (pathname === '/account/profile' && (!hasToken || !data)) {
      navigate({
        to: '/login',
        search: { returnTo: '/', redirect: '/', search: '' },
      })
    }
  }, [pathname, hasToken, data, navigate])

  return (
    <div className="sm:hidden block fixed bottom-0 w-full bg-[#241612] -mx-4 -mb-4 rounded-t-[31px] h-23.75">
      <nav className="p-4 flex items-center justify-evenly gap-4 h-full">
        {linkOptions.map((link) => (
          <Link key={link.route} to={link.route} search={{ search: '' }}>
            <span
              className={`${pathname === link.route ? 'text-[#E89B55]' : 'text-[#CFB28C]'}`}
            >
              {link.icon}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default MobileFooter
