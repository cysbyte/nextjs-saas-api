import Header from '@/components/layout/Header'
import Hero from '@/components/sections/auth/signin/Hero'
import React from 'react'

const page = () => {
  return (
      <main className='h-screen bg-auth bg-cover' >
          <Header/>
          <Hero/>
    </main>
  )
}

export default page