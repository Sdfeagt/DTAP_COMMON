import React, { useEffect, useState } from 'react'

import { getDevices } from '../database/firebaseDB'
import { useAuth } from '../../context/AuthContext';

const StatusDash = () => {
  const [devices, setDevices] = useState<any[]>([{ name: "device_1", status: true, speed: 10, hardware_status: 1 }, { name: "device_2", status: true, speed: 25, hardware_status: 1 }]) // junk data here
  const { user } = useAuth();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await getDevices()
        setDevices(data)
      } catch (error: any) {
        console.log(error.message);
      }
    }
    const interval = setInterval(() => {
      getInfo()
    }, 1000)
    return () => clearInterval(interval)
  })
  const data = devices.filter((device: any) => (device.name != "heatmap")).filter((device) => (device.owner === user.email)).map((device: any) => (
    {
      name: device.name,
      status: device.status,
      speed: device.speed,
      hardware_status: device.hardware_status

    }))

  return (
    <div className='h-[300px] w-[600px] flex justify-center items-stretch '>
      <div className="grid grid-cols-4 justify-center my-4">
        <div className="flex justify-center items-center font-bold px-12">Device</div>
        <div className="flex justify-center items-center font-bold border-l-2">Connect</div>
        <div className="flex justify-center items-center font-bold border-l-2">Speed</div>
        <div className="flex justify-center items-center font-bold border-l-2">Hardware</div>
        {data.map(obj => (
          <React.Fragment key={obj.name}>
            <div className="flex justify-center items-center border-2 border-r-0 rounded-l-lg my-2 ">{obj.name}</div>
            {obj.status ? <div className="flex justify-center items-center border-2 my-2 border-r-0">Ok</div> : <div className="flex justify-center items-center border-2 my-2 border-r-0">ERR</div>}
            <div className="flex justify-center items-center border-2 my-2 border-r-0">{obj.speed}</div>
            {obj.hardware_status === true ? <div className="flex justify-center items-center border-2 my-2 rounded-r-lg">Ok</div> : <div className="flex justify-center items-center border-2 my-2 rounded-r-lg">ERR</div>}
          </React.Fragment>
        ))
        }
      </div >
    </div >
  )
}

export default StatusDash
