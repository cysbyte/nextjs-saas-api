import Header from '@/components/layout/Header'
import PriceingPlan from '@/components/sections/price/PriceingPlan'
import ProductSideBar from '@/components/shared/ProductSideBar'
import React from 'react'
import Hero from '@/components/sections/product/TextToSpeech/Hero'

const TextToSpeech = () => {
  return (
      <main className='flex flex-row'>
          <ProductSideBar />
          <Hero/>
    </main>
  )
}

export default TextToSpeech