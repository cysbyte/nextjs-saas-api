import ProductSideBar from '@/components/layout/ProductSideBar'
import Case from '@/components/sections/product/voice/add'
import Dialog from '@/components/shared/RecordModal'
import { authConfig, loginIsRequiredServer } from '@/lib/auth'
import { getServerSession } from 'next-auth'

const Voice = async () => {
  await loginIsRequiredServer();

  const session = await getServerSession(authConfig);
  if (!session) return;
  console.log(session?.user?.email?.toString())
  // console.log(session)
  //@ts-ignore
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email?.toString(),
    },
  });

  return (
    <main className='flex flex-row'>
          <ProductSideBar productName='Voice'/>
          <Case user={user}/>
    </main>
  )
}

export default Voice