import Header from '@/components/layout/Header'
import PriceingPlan from '@/components/sections/price/PriceingPlan'
import ProductSideBar from '@/components/layout/ProductSideBar'
import React from 'react'
import Case from '@/components/sections/product/text-to-speech'
import { loginIsRequiredServer } from '@/lib/auth'
import prisma from '@/lib/prismadb'
import { createCustomerIfNull } from '@/lib/stripe'

const TextToSpeech = async ({ params }: {
    params: {
        voiceId: string
    }
}) => {

    await loginIsRequiredServer();
    //await createCustomerIfNull();

    //@ts-ignore
    // const customVoiceId = await prisma.customVoiceId.findFirst({
    //     where: {
    //         id:params.voiceId
    //     }
    // }
    // )
    // console.log(customVoiceId)

    // //@ts-ignore
    // const voiceNames = await prisma.TextToSpeech.findUnique({
    //     where: {
    //         id: params.id
    //     },
    //     select: {
    //         voiceName: true
    //     }
    // })
    // console.log('voiceNames', voiceNames)

  return (
      <main className='flex flex-row'>
          <ProductSideBar productName='TextToSpeech'/>
          <Case voiceId={params.voiceId} />
    </main>
  )
}

export default TextToSpeech