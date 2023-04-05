import ChartAndStatus from '@/components/ChartAndStatus'
import ChartDash from '@/components/ChartDash'
import Header from '@/components/Header'
import HeatMap from '@/components/HeatMap'
import Status from '@/components/StatusDash'
import Head from 'next/head'
import React, { useState } from 'react'

const Dashboard = () => {
  
    const dashobj = {info: "Dashboard", button: false}

  return (
    <div>    
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header {...dashobj} />
      <div className='items-center'>
        <div className='flex justify-between '>
          <ChartAndStatus />
          <HeatMap />
        </div>
      </div>
  </div>
  )
}

export default Dashboard