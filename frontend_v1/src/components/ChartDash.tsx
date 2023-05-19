import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getDevices } from '@/database/firebaseDB';
import { useAuth } from '../../context/AuthContext';

ChartJS.register(...registerables);
const ChartDash = () => {
  const { user } = useAuth();

  const [devices, setDevices] = useState<any[]>([{ name: "device_1", status: true, speed: 10, hardware_status: 1 }, { name: "device_2", status: true, speed: 25, hardware_status: 1 }])
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
  const data = {
    labels: devices.filter((device: any) => (device.name != "heatmap" && device.owner === user.email)).map((device: any) => (device.name)),
    datasets: [
      {
        label: '# Connection speed',
        data: devices.filter((device: any) => (device.name != "heatmap")).map((device: any) => (device.speed)),
        backgroundColor: devices.filter((device: any) => (device.name != "heatmap")).map((device: any) => ('rgba(182, 96, 18)'))
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        width={600}
        height={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                color: 'white',
                font: {
                  family: 'Montserrat',
                  size: 12,
                },
              },
            },
            x: {
              ticks: {
                color: 'white',
                font: {
                  family: 'Montserrat',
                  size: 12,
                },
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: 'white',
                font: {
                  family: 'Montserrat',
                  size: 12,
                },
              },
            },
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 10,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartDash;