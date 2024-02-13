import ProductSideBar from '@/components/layout/ProductSideBar'
import Case from '@/components/sections/product/voice/add'

const Voice = () => {
  return (
      <main className='flex flex-row'>
          <ProductSideBar productName='Voice'/>
          <Case />
    </main>
  )
}

export default Voice