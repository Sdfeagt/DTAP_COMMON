import Header from '@/components/Header';
import Menu from '@/components/Menu';
import ProtectedRoute from '@/components/ProtectedRoute';
import Settings_btn from '@/components/Settings_btn';
import Head from 'next/head';
import React from 'react'

const settings = () => {
    return (
        <ProtectedRoute>
            <div className=''>
                <Head>
                    <title>Settings</title>
                    <meta name="description" content="Settings" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="fixed top-0 left-0 right-0 z-10 bg-background">
                    <Header info='Dashboard' />
                </div>
                <div className="flex ml-10">
                    <Menu onPage={"settings"} />
                    <div className="flex flex-col flex-grow mt-24">
                        <div className="">
                            <div className="flex justify-around items-start my-20">
                                <div className='flex flex-col justify-center text-center space-y-8'>
                                    <p className=' text-2xl'>General</p>
                                    <div><Settings_btn to_show='Add a robot' /></div>
                                    <div><Settings_btn to_show='Remove a robot' /></div>
                                    <div><Settings_btn to_show='Restart a robot' /></div>
                                </div>
                                <div className='flex flex-col justify-center text-center space-y-8'>
                                    <p className=' text-2xl'>Restart</p>
                                    <div><Settings_btn to_show='Restart data' /></div>
                                    <div><Settings_btn to_show='Restart all robots' /></div>
                                </div>
                                <div className='flex flex-col justify-center text-center space-y-8'>
                                    <p className=' text-2xl'>Admin</p>
                                    <div><Settings_btn to_show='Delete the account' /></div>
                                    <div><Settings_btn to_show='Restart all robots' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </ProtectedRoute >
    );
}

export default settings