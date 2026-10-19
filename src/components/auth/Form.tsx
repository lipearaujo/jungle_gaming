import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { FaFacebookF } from 'react-icons/fa'
import { Button } from '../ui/button'
import { useState } from 'react'

type ChangeFormButtons = 'register' | 'login'

const Form = () => {
  const [changeForm, setChangeForm] = useState<ChangeFormButtons>('login')

  return (
    <div className="w-full">
      <div className="px-12 py-6">
        <div className="flex justify-center items-center">
          <Button
            onClick={() => setChangeForm('login')}
            variant="form"
            className={`text-xl leading-4 ${changeForm === 'login' ? 'text-[#E89B55]' : ''}`}
          >
            Entrar
          </Button>

          <div className="bg-[#F0805F] w-0.5 h-5"></div>

          <Button
            onClick={() => setChangeForm('register')}
            variant="form"
            className={`text-xl leading-4 ${changeForm === 'register' ? 'text-[#E89B55]' : ''}`}
          >
            Criar conta
          </Button>
        </div>

        {changeForm === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>

      <div className="flex justify-between items-center gap-2">
        <div className="bg-[#3F2319] flex-1  h-px"></div>
        <p className="text-[13px] text-[#F5F1EB] leading-4">Ou continue com</p>
        <div className="bg-[#3F2319] flex-1 h-px"></div>
      </div>

      <div className="px-12 py-6 flex flex-col gap-4">
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
    </div>
  )
}

export default Form
