import React, { use, useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from "next/router";

import Home from '../../public/home.svg'
import Stats from '../../public/data.svg'
import Settings from '../../public/settings.svg'

import Home_prim from '../../public/home_prim.svg'
import Stats_prim from '../../public/stats_prim.svg'
import Settings_prim from '../../public/settings_prim.svg'

type menu_props = {
    onPage: string
}


const Menu = ({ onPage }: menu_props) => {
    const router = useRouter()

    const [cssMenu, setCss] = useState(0)

    useEffect(() => {
        if (onPage === "home") {
            setCss(1)
        }
        else if (onPage === 'Stats') {
            setCss(2)
        }
        else if (onPage === "Settings") {
            setCss(3)
        }
        else {
            console.log("Lmao you did something wrong");
        }
    }, [onPage])
    return (
        <div className='fixed top-0 left-0 h-screen bg-surface border-r border-white  pt-4 group'>
            {cssMenu === 1 ? (<div className="h-full flex flex-col justify-between">
                <div className="pt-28">
                    <div className="flex items-center bg-primary rounded-full m-2 group-hover:rounded-l-lg cursor-pointer transition-all duration-300" onClick={() => { router.push("/dashboard") }}>
                        <Image src={Home} alt="home" />
                        <div className="pr-24 pl-4 hidden group-hover:block">Home</div>
                    </div>
                    <div className="flex items-center m-2 cursor-pointer transition-all duration-300 hover:bg-primary/50 group-hover:rounded-l-lg rounded-full" onClick={() => { router.push("/stats") }}>
                        <Image src={Stats_prim} alt="Stats" />
                        <div className="pr-24 pl-4 hidden group-hover:block">Statistics</div>
                    </div>
                </div>
                <div className="flex items-center m-2 cursor-pointer transition-all duration-300 hover:bg-primary/50 group-hover:rounded-l-lg rounded-full" onClick={() => { router.push("/settings") }}>
                    <Image src={Settings_prim} alt="Settings" />
                    <div className="pr-24 pl-4 hidden group-hover:block">Settings</div>
                </div>
            </div>


            ) : cssMenu === 2 ? (

                <div className='h-full flex flex-col justify-between'>
                    <div className='pt-28'>
                        <div className='flex items-center m-2 cursor-pointer transition-all duration-300 hover:bg-primary/50 group-hover:rounded-l-lg rounded-full' onClick={() => { router.push("/dashboard") }} >
                            <Image src={Home_prim} alt="home" />
                            <div className='pr-24 pl-4 hidden group-hover:block'>Home</div></div>
                        < div className='flex items-center bg-primary rounded-full m-2 group-hover:rounded-l-lg cursor-pointer transition-all duration-300' onClick={() => { router.push("/stats") }}>
                            <Image src={Stats} alt="Stats" />
                            <div className='pr-24 pl-4 hidden group-hover:block'>Statistics</div></div >
                    </div>
                    <div className='flex items-center m-2 cursor-pointer transition-all duration-300 hover:bg-primary/50 group-hover:rounded-l-lg rounded-full' onClick={() => { router.push("/settings") }}>
                        <Image src={Settings_prim} alt="Settings" />
                        <div className='pr-24 pl-4 hidden group-hover:block'>Settings</div></div>
                </div >

            ) : (

                <div className='h-full flex flex-col justify-between'>
                    <div className='pt-28'>
                        <div className='flex items-center m-2 cursor-pointer transition-all duration-300 hover:bg-primary/50 group-hover:rounded-l-lg rounded-full' onClick={() => { router.push("/dashboard") }} >
                            <Image src={Home_prim} alt="home" />
                            <div className='pr-24 pl-4 hidden group-hover:block'>Home</div></div>
                        < div className='flex items-center m-2 cursor-pointer transition-all duration-300 hover:bg-primary/50 group-hover:rounded-l-lg rounded-full' onClick={() => { router.push("/stats") }}>
                            <Image src={Stats_prim} alt="Stats" />
                            <div className='pr-24 pl-4 hidden group-hover:block'>Statistics</div></div >
                    </div>
                    <div className='flex items-center bg-primary rounded-full m-2 group-hover:rounded-l-lg cursor-pointer transition-all duration-300' onClick={() => { router.push("/settings") }}>
                        <Image src={Settings} alt="Settings" />
                        <div className='pr-24 pl-4 hidden group-hover:block'>Settings</div></div>
                </div>
            )

            }

        </div>
    )
}

export default Menu