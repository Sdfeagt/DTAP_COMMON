import ChartAndStatus from '@/components/ChartAndStatus'
import Header from '@/components/Header'
import HeatMap from '@/components/HeatMap'
import Insight from '@/components/Insight'
import Menu from '@/components/Menu'
import ProtectedRoute from '@/components/ProtectedRoute'
import Head from 'next/head'
import React from 'react'

const Dashboard = () => {

  return (
    <ProtectedRoute>
      <div className=''>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="fixed top-0 left-0 right-0 z-10 bg-background">
          <Header info='Dashboard' />
        </div>
        <div className="flex ml-10">
          <Menu onPage={"home"} />
          <div className="flex flex-col flex-grow mt-24">
            <div className="">
              <div className="flex justify-around items-center my-10">
                <ChartAndStatus />
                <HeatMap />
              </div>
              <div className="my-10">
                <div className="py-10 flex justify-around">
                  <Insight title={"Insight"} graphType={"circle"} textLong={"80% of robots are fully operational!"} data={[1, 2, 3, 4, 5]} />
                  <Insight title={"Insight"} graphType={"line"} textLong={"The average connection quality has increased by 12% over the last 2 months! "} data={[1, 2, 3, 4, 5]} />
                  <Insight title={"Insight"} graphType={"ERR"} textLong={"More insights coming soon!"} data={[1, 2, 3, 4, 5]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </ProtectedRoute>
  );





}

export default Dashboard