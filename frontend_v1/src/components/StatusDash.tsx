import React, { useEffect, useState } from 'react'

import { getDevices } from '../database/firebaseDB'
import { useAuth } from '../../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';


const DEVICES_STORAGE_KEY = 'devices';

const StatusDash = () => {
  const [devices, setDevices] = useState<any[]>([]);
  const { user } = useAuth();


  useEffect(() => {
    const loadDevicesFromLocalStorage = () => {
      const storedDevices = localStorage.getItem(DEVICES_STORAGE_KEY);
      if (storedDevices) {
        setDevices(JSON.parse(storedDevices));
      }
    };

    const saveDevicesToLocalStorage = (devices: any[]) => {
      localStorage.setItem(DEVICES_STORAGE_KEY, JSON.stringify(devices));
    };

    const getInfo = async () => {
      try {
        const data = await getDevices();
        setDevices(data);
        saveDevicesToLocalStorage(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    loadDevicesFromLocalStorage(); // Load devices from local storage before fetching an update

    const interval = setInterval(() => {
      getInfo();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const data = devices.filter((device: any) => (device.name != "heatmap")).filter((device) => (device.owner === user.email)).map((device: any) => (
    {
      name: device.name,
      status: device.status,
      speed: device.speed,
      hardware_status: device.hardware_status

    }))
  return (
    <div className='h-[300px] w-[600px] flex justify-center items-stretch '>
      {data.length != 0 ? <div className="grid grid-cols-4 justify-center my-4">
        <div className="flex justify-center items-center font-bold px-12">Device</div>
        <div className="flex justify-center items-center font-bold border-l-2">Connect</div>
        <div className="flex justify-center items-center font-bold border-l-2">Speed</div>
        <div className="flex justify-center items-center font-bold border-l-2">Hardware</div>
        {data.map(obj => (
          <React.Fragment key={uuidv4()}>
            <div className="flex justify-center items-center border-2 border-r-0 rounded-l-lg my-2 ">{obj.name}</div>
            {obj.status ? <div className="flex justify-center items-center border-2 my-2 border-r-0">Ok</div> : <div className="flex justify-center items-center border-2 my-2 border-r-0">ERR</div>}
            <div className="flex justify-center items-center border-2 my-2 border-r-0">{obj.speed}</div>
            {obj.hardware_status === true ? <div className="flex justify-center items-center border-2 my-2 rounded-r-lg">Ok</div> : <div className="flex justify-center items-center border-2 my-2 rounded-r-lg">ERR</div>}
          </React.Fragment>
        ))
        }
      </div > :
        <div className="absolute left-60 bottom-0"><div className="flex justify-center group relative mr-4">
          <div aria-label="Loading..." role="status">
            <svg className="h-8 w-8 animate-spin stroke-gray-500">
              <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
            </svg>
          </div>
          <div aria-label="Loading..." role="status">
            <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
              <path className="fill-gray-200" d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z">
              </path>
              <path className="fill-primary" d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z">
              </path>
            </svg>
          </div>
        </div>
        </div>

      }
    </div >
  )
}

export default StatusDash
