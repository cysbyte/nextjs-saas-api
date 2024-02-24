import ProductSideBar from '@/components/layout/ProductSideBar'
import Case from '@/components/sections/product/voice/main'
import { loginIsRequiredServer } from '@/lib/auth'


const Voice = async () => {

  await loginIsRequiredServer();

  return (
      <main className='flex flex-row'>
      <ProductSideBar productName='Voice' />
      {/* @ts-expect-error Async Server Component */}
      <Case />
    </main>
  )
}

export default Voice