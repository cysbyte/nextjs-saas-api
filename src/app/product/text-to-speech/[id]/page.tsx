import Header from '@/components/layout/Header'
import PriceingPlan from '@/components/sections/price/PriceingPlan'
import ProductSideBar from '@/components/layout/ProductSideBar'
import React from 'react'
import Case from '@/components/sections/product/text-to-speech'
import { loginIsRequiredServer } from '@/lib/auth'
import prisma from '@/lib/prismadb'

const TextToSpeech = async ({params}:{params: {id: string}}) => {

    //console.log('params', params)
    //@ts-ignore
    const voice = await prisma.TextToSpeech.findFirst({
        where: {
            id:params.id
        }
    }
    )
    console.log(voice)

  await loginIsRequiredServer();

  return (
      <main className='flex flex-row'>
          <ProductSideBar productName='TextToSpeech'/>
          <Case voice={voice} />
    </main>
  )
}

export default TextToSpeech