import React from 'react'

type settings_props = {
    to_show: string
}
const Settings_btn = ({ to_show }: settings_props) => {
    return (
        <div>
            <button className="w-full flex justify-center self-center bg-primary rounded-2xl shadow-md	px-20 py-2 mr-2 hover:bg-primary/75">{to_show}</button>
        </div>
    )
}

export default Settings_btn