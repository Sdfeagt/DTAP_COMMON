import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Head from 'next/head';
import React from 'react'

const stats = () => {
    return (
        <div className=''>
            <Head>
                <title>Statistics</title>
                <meta name="description" content="Statistics" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="fixed top-0 left-0 right-0 z-10 bg-background">
                <Header info='Statistics' />
            </div>
            <div className="flex ml-10">
                <Menu onPage={"Stats"} />
                <div className="flex flex-col flex-grow mt-24">
                </div>
            </div>
        </div >
    );
}

export default stats