import Header from '@/components/layout/Header'
import PriceingPlan from '@/components/sections/price/PriceingPlan'
import ProductSideBar from '@/components/layout/ProductSideBar'
import React from 'react'
import Case from '@/components/sections/product/voice'

const Voice = () => {
  return (
      <main className='flex flex-row'>
          <ProductSideBar productName='Voice'/>
          <Case />
    </main>
  )
}

export default Voice