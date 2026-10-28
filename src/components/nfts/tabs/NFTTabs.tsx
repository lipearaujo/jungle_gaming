import { Button } from '@base-ui/react/button'
import { useState } from 'react'
import NFTDetailsTab from './NFTDetailsTab'
import NFTReviewsTab from './NFTReviewsTab'
import type INfts from '#/types/nfts'

type Props = {
  nft: INfts
}

const buttonOptions = [
  {
    title: 'Detalhes do NFT',
    btnValue: 'details',
  },
  {
    title: 'Avaliações de colecionadores',
    btnValue: 'reviews',
  },
] as const

type ButtonValues = (typeof buttonOptions)[number]['btnValue']

const NFTTabs = ({ nft }: Props) => {
  const [buttonValue, setButtonValue] = useState<ButtonValues>('details')

  return (
    <div className="hidden sm:flex flex-col gap-2 mt-24">
      <div className="flex items-center gap-8">
        {buttonOptions.map((button) => (
          <div key={button.btnValue}>
            <Button
              onClick={() => setButtonValue(button.btnValue)}
              key={button.btnValue}
              className={`leading-4 font-bold cursor-pointer ${buttonValue === button.btnValue ? 'text-[#E89B55] font-bold text-[17px]' : 'text-[#F5F1EB] font-normal'}`}
            >
              {button.title}
              {buttonValue === button.btnValue ? (
                <div className="h-0.5 bg-[#D28A4C] relative top-2"></div>
              ) : (
                ''
              )}
            </Button>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#D28A4C]/30"></div>

      {buttonValue === 'details' ? (
        <NFTDetailsTab nft={nft} />
      ) : (
        <NFTReviewsTab />
      )}
    </div>
  )
}

export default NFTTabs
