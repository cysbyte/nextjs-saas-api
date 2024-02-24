import ProductSideBar from '@/components/layout/ProductSideBar'
import Case from '@/components/sections/product/voice/add'
import Dialog from '@/components/shared/RecordModal'
import { loginIsRequiredServer } from '@/lib/auth'

const Voice = async () => {
  await loginIsRequiredServer();
  return (
    <main className='flex flex-row'>
          <ProductSideBar productName='Voice'/>
          <Case />
    </main>
  )
}

export default Voice