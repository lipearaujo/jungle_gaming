import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from '@tanstack/react-router'

type Props = {
  pathname: string
  searchParams: {
    returnTo: string
    redirect: string
  }
}

const Form = ({ pathname, searchParams }: Props) => {
  return (
    <div className="w-full sm:border-b-10 border-b-[#D28A4C]">
      <div className="sm:px-12 py-3 sm:py-6">
        <p className="sm:hidden h-34 text-[#F5F1EB] font-bold text-[32px] flex items-center justify-center leading-none">
          KURIO
        </p>

        <div className="hidden sm:flex justify-center items-center gap-3">
          <Link
            to="/login"
            search={{
              returnTo: searchParams.returnTo,
              redirect: searchParams.redirect,
              search: '',
            }}
            className={`text-xl leading-4 ${pathname === '/login' ? 'text-[#E89B55]' : 'text-[#F5F1EB]'}`}
          >
            Entrar
          </Link>

          <div className="bg-[#F0805F] w-0.5 h-5"></div>

          <Link
            to="/register"
            search={{
              returnTo: searchParams.returnTo,
              redirect: searchParams.redirect,
              search: '',
            }}
            className={`text-xl leading-4 ${pathname === '/register' ? 'text-[#E89B55]' : 'text-[#F5F1EB]'}`}
          >
            Criar conta
          </Link>
        </div>

        {pathname === '/login' ? (
          <LoginForm searchParams={searchParams} />
        ) : (
          <RegisterForm searchParams={searchParams} />
        )}
      </div>

      <div className="flex justify-between items-center gap-2 pt-4">
        <div className="bg-[#3F2319] flex-1  h-px"></div>
        <p className="text-[13px] text-[#F5F1EB] leading-4">Ou continue com</p>
        <div className="bg-[#3F2319] flex-1 h-px"></div>
      </div>

      <div className="sm:px-12 py-6 flex flex-col gap-4">
        <div className="flex justify-center items-center gap-3 h-10 bg-transparent rounded-md border border-[#3F2319]">
          <img src="/assets/Group.png" width={20} height={20} />
          <p className="text-[#CFB28C] font-medium text-[13px] leading-4">
            Continuar com Google
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 h-10 bg-transparent rounded-md border border-[#3F2319]">
          <FaFacebookF size={20} color="#3B5999" />
          <p className="text-[#CFB28C] font-medium text-[13px] leading-4">
            Continuar com Facebook
          </p>
        </div>
      </div>

      {pathname === '/login' ? (
        <p className="text-[#CFB28C] text-[15px] leading-none text-center sm:hidden">
          Novo na Kurio?{' '}
          <Link
            to="/register"
            search={{
              returnTo: searchParams.returnTo,
              redirect: searchParams.redirect,
              search: '',
            }}
          >
            Crie uma conta
          </Link>
        </p>
      ) : (
        <p className="text-[#CFB28C] text-[15px] leading-none text-center sm:hidden">
          Já tem uma conta?{' '}
          <Link
            to="/login"
            search={{
              returnTo: searchParams.returnTo,
              redirect: searchParams.redirect,
              search: '',
            }}
          >
            Entre
          </Link>
        </p>
      )}
    </div>
  )
}

export default Form
