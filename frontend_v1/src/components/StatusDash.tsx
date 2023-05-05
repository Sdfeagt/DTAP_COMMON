import React from 'react'

interface data_interface {
  name: string;
  connect: boolean;
  quality: number;
  hardware: number;
}

const StatusDash = () => {
  const data: data_interface[] = [
    { name: "device_1", connect: true, quality: 10, hardware: 1 },
    { name: "device_2", connect: true, quality: 25, hardware: 1 },
    { name: "device_3", connect: true, quality: 60, hardware: -1 },
    { name: "device_4", connect: true, quality: 88, hardware: 1 },
    { name: "device_5", connect: true, quality: 100, hardware: 1 },
  ];

  return (
    <div className='h-[300px] w-[600px] flex justify-center items-stretch '>
      <div className="grid grid-cols-4 justify-center my-4">
        <div className="flex justify-center items-center font-bold border-r-2 px-12">Device</div>
        <div className="flex justify-center items-center font-bold border-r-2">Connect</div>
        <div className="flex justify-center items-center font-bold border-r-2">Quality</div>
        <div className="flex justify-center items-center font-bold">Hardware</div>
        {data.map(obj => (
          <React.Fragment key={obj.name}>
            <div className="flex justify-center items-center border-2 border-r-0 rounded-l-lg my-2">{obj.name}</div>
            {obj.connect ? <div className="flex justify-center items-center border-2 my-2 border-r-0">Ok</div> : <div className="flex justify-center items-center border-2 my-2 border-r-0">ERR</div>}
            <div className="flex justify-center items-center border-2 my-2 border-r-0">{obj.quality}</div>
            <div className="flex justify-center items-center border-2 rounded-r-lg my-2">{obj.hardware}</div>
          </React.Fragment>
        ))
        }
      </div >
    </div >
  )
}

export default StatusDash
