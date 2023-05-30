import React, { useState } from 'react'

type settings_props = {
    to_show: string,
}
const Settings_btn = ({ to_show }: settings_props) => {
    const [showErr, setShowErr] = useState(false)

    return (
        <div className='relative'>
            <button onClick={() => setShowErr(true)} className=" z-0 w-full flex justify-center self-center bg-primary rounded-2xl shadow-md px-20 py-2 mr-2 hover:bg-primary/75">{to_show}</button>
            {showErr ? (
                <div className='absolute top-10 bg-surface rounded-2xl shadow-md border-2 border-primary mt-2 z-10'>
                    <div className='flex justify-between border-b-2 border-primary'>
                        <div></div>
                        <div className='ml-6'>
                            <p>Warning</p>
                        </div>
                        <div className='text-primary font-bold cursor-pointer pr-2' onClick={() => setShowErr(false)}>
                            <p>X</p>
                        </div>
                    </div>
                    Are you sure you want to {to_show.toLowerCase()}?
                    <div className='flex flex-col'>
                        <button onClick={() => setShowErr(false)} className="w-1/2 flex justify-center self-center bg-surface_err text-red rounded-2xl shadow-md px-20 py-2 mr-2 hover:bg-surface_err/75 my-2">Yes</button>
                        <button onClick={() => setShowErr(false)} className="w-1/2 flex justify-center self-center bg-primary rounded-2xl shadow-md px-20 py-2 mr-2 hover:bg-primary/75 my-2">No</button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>

    )
}

export default Settings_btn