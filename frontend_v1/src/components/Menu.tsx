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

    //TODO: Fix fill-primary thingy
    //bg-primary rounded-full m-2
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
        <div className=''>
            {cssMenu === 1 ? (<div>
                <div className='bg-primary rounded-full m-2'><Image src={Home} alt="home" onClick={() => { router.push("/dashboard") }} className='cursor-pointer' /></div>
                <div className=' m-2'><Image src={Stats_prim} alt="Stats" onClick={() => { router.push("/stats") }} className='cursor-pointer' /></div>
                <div className='m-2'><Image src={Settings_prim} alt="Settings" onClick={() => { router.push("/settings") }} className='cursor-pointer' /></div></div>) : cssMenu === 2 ? (<div>
                    <div className='m-2'><Image src={Home_prim} alt="home" onClick={() => { router.push("/dashboard") }} className='cursor-pointer' /></div>
                    <div className='bg-primary rounded-full m-2'><Image src={Stats} alt="Stats" onClick={() => { router.push("/stats") }} className='cursor-pointer' /></div>
                    <div className='m-2'><Image src={Settings_prim} alt="Settings" onClick={() => { router.push("/settings") }} className='cursor-pointer' /></div></div>) : (<div>
                        <div className=' m-2'><Image src={Home_prim} alt="home" onClick={() => { router.push("/dashboard") }} className='cursor-pointer' /></div>
                        <div className=' m-2'><Image src={Stats_prim} alt="Stats" onClick={() => { router.push("/stats") }} className='cursor-pointer' /></div>
                        <div className='m-2 bg-primary rounded-full'><Image src={Settings} alt="Settings" onClick={() => { router.push("/settings") }} className='cursor-pointer' /></div></div>)}

        </div>
    )
}

export default Menu