import ProductSideBar from '@/components/layout/ProductSideBar'
import React from 'react'
import Case from '@/components/sections/product/api-access'

const APIAccess = () => {
  return (
      <main className='flex flex-row'>
          <ProductSideBar productName='APIAccess'/>
          <Case/>
    </main>
  )
}

export default APIAccess