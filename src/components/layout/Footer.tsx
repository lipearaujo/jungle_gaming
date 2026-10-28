import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="md:w-full md:max-h-152.5 sm:mt-24 mt-8">
      <div className="w-full md:h-62.5 bg-[#241612]">
        <div className="h-full md:grid grid-cols-[264.67px_264.67px_264.67px_1fr] p-8 md:gap-4 flex flex-col items-center gap-8">
          <div className="md:border-r border-r-[#D28A4C] md:items-start flex flex-col gap-2 items-center">
            <div className="w-18.5 h-18.5 rounded-full bg-[#D28A4C] text-2xl font-bold text-[#140D0A] flex justify-center items-center">
              W
            </div>
            <p className="text-[17px] text-[#F5F1EB] font-bold">
              Segurança da carteira
            </p>
            <p className="text-[14px] text-[#CFB28C] md:text-start text-center font-normal leading-5.5 w-51 h-22">
              Proteja sua carteira e colecione arte digital verificada com
              confiança.
            </p>
          </div>

          <div className="md:border-r border-r-[#D28A4C] md:items-start flex flex-col gap-2 items-center">
            <div className="w-18.5 h-18.5 rounded-full bg-[#D28A4C] text-2xl font-bold text-[#140D0A] flex justify-center items-center">
              C
            </div>
            <p className="text-[17px] text-[#F5F1EB] font-bold md:text-start text-center">
              Criadores em destaque
            </p>
            <p className="text-[14px] text-[#CFB28C] font-normal leading-5.5 w-51 h-22 md:text-start text-center">
              Conheça artistas, estúdios e comunidades que moldam a cultura
              digital na rede.
            </p>
          </div>

          <div className="md:border-r border-r-[#D28A4C] md:items-start flex flex-col gap-2 items-center">
            <div className="w-18.5 h-18.5 rounded-full bg-[#D28A4C] text-2xl font-bold text-[#140D0A] flex justify-center items-center">
              D
            </div>
            <p className="text-[17px] text-[#F5F1EB] font-bold">
              Alertas de lançamentos
            </p>
            <p className="text-[14px] text-[#CFB28C] font-normal leading-5.5 w-51 h-22">
              Receba calendários de cunhagem, novidades de listas de acesso e
              análises do mercado.
            </p>
          </div>

          <div>
            <div className="flex flex-col md:gap-2 gap-3 items-center md:items-start">
              <p className="font-bold text-[18px] text-[#F5F1EB] text-center md:text-start">
                Antecipe-se ao próximo lançamento
              </p>

              <div className="flex items-center justify-center bg-[#38220F] h-10 rounded-md">
                <Input
                  className="outline-none border-0 rounded-r-none bg-transparent h-full"
                  placeholder="Digite seu email..."
                  type="email"
                />
                <Button
                  className="h-full rounded-l-none cursor-pointer text-[18px] font-bold w-25 text-black bg-[#D28A4C]"
                  variant="header"
                >
                  Enviar
                </Button>
              </div>

              <p className="text-[#CFB28C] text-[13px] font-normal leading-5.5 text-center md:text-start">
                Receba lançamentos selecionados, histórias de criadores e
                novidades do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-h-90">
        <div className="md:h-22 bg-[#38220F] flex items-center">
          <div className="md:grid grid-cols-[210.67px_210.67px_210.67px_1fr] p-8 md:gap-22 items-center flex flex-col gap-3">
            <p className="text-sm font-bold leading-5.5 text-[#F5F1EB]">
              KURIO
            </p>
            <p className="text-sm font-normal leading-5.5 text-[#F5F1EB] text-center md:text-start">
              Feito para colecionadores, criadores e cultura
            </p>
            <p className="text-sm font-normal leading-5.5 text-[#F5F1EB]">
              contato@email.com
            </p>
            <p className="text-sm font-normal leading-5.5 text-[#F5F1EB]">
              +55 11 4002 8922
            </p>
          </div>
        </div>

        <div className="md:max-h-68 bg-[#241612]">
          <div className="md:h-59">
            <div className="md:grid grid-cols-[178.67px_178.67px_178.67px_1fr] p-8 md:gap-30 md:items-start items-center flex flex-col gap-10">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <p className="font-bold text-[18px] leading-4 text-[#F5F1EB]">
                  Meu perfil
                </p>
                <ul className="text-sm flex flex-col gap-2 items-center md:items-start">
                  <li>Meu Perfil</li>
                  <li>Minha coleção</li>
                  <li>Atividade</li>
                  <li>Estúdio do criador</li>
                  <li>Lista de interesse</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 items-center md:items-start">
                <p className="font-bold text-[18px] leading-4 text-[#F5F1EB]">
                  Central de ajuda
                </p>
                <ul className="text-sm flex flex-col gap-2 items-center md:items-start">
                  <li>Central de ajuda </li>
                  <li>Como comprar NFTs</li>
                  <li>Carteira e segurança</li>
                  <li>Política do mercado</li>
                  <li>Denunciar item</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 items-center md:items-start">
                <p className="font-bold text-[18px] leading-4 text-[#F5F1EB]">
                  Coleções
                </p>
                <ul className="text-sm flex flex-col gap-2 items-center md:items-start">
                  <li>Arte digital</li>
                  <li>Fotografia</li>
                  <li>Música</li>
                  <li>Arte 3D</li>
                  <li>Utilidade</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 items-center md:items-start">
                <p className="font-bold text-[18px] text-[#F5F1EB] leading-4">
                  Redes sociais
                </p>
                <div className="flex gap-2 items-center md:items-start">
                  <div className="flex items-center justify-center border border-[#D28A4C] rounded-md w-7.5 h-7.5">
                    <FaFacebookF color="#D28A4C" />
                  </div>
                  <div className="flex items-center justify-center border border-[#D28A4C] rounded-md w-7.5 h-7.5">
                    <FaInstagram color="#D28A4C" />
                  </div>
                  <div className="flex items-center justify-center border border-[#D28A4C] rounded-md w-7.5 h-7.5">
                    <FaTwitter color="#D28A4C" />
                  </div>
                  <div className="flex items-center justify-center border border-[#D28A4C] rounded-md w-7.5 h-7.5">
                    <FaLinkedinIn color="#D28A4C" />
                  </div>
                  <div className="flex items-center justify-center border border-[#D28A4C] rounded-md w-7.5 h-7.5">
                    <img src="/assets/Union.png" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#F5F1EB]">Carteiras compatíveis</p>
                  <div className="bg-[#38220F] w-fit p-2 border border-[#55321F] h-6.5 rounded-md flex items-center justify-center">
                    <span className="font-bold text-[9px] text-[#E89B55]">
                      METAMASK • WALLETCONNECT • COINBASE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-7.5 bg-[#140D0A]">
            <p className="text-center font-normal text-sm p-4">
              © 2026 Kurio. Propriedade digital para todos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
