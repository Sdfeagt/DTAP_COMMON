import ForgotPass from '@/components/ForgotPass'
import HeaderSimple from '@/components/HeaderSimple'
import Head from 'next/head'
import React from 'react'

const Forgot = () => {
  return (
    <div>
      <Head>
        <title>DTAP V2</title>
        <meta name="description" content="forgot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSimple />
      <main>
        <div className="flex justify-center self-center mt-24">
          <ForgotPass />
        </div>
      </main>
    </div>
  )
}

export default Forgot