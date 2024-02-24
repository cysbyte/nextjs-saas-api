import Header from '@/components/layout/Header'
import PriceingPlan from '@/components/sections/price/PriceingPlan'
import ProductSideBar from '@/components/layout/ProductSideBar'
import React from 'react'
import Case from '@/components/sections/product/text-to-speech'
import { loginIsRequiredServer } from '@/lib/auth'

const TextToSpeech = async () => {

  await loginIsRequiredServer();

  return (
      <main className='flex flex-row'>
          <ProductSideBar productName='TextToSpeech'/>
          <Case/>
    </main>
  )
}

export default TextToSpeech