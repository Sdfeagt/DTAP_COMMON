import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

ChartJS.register(...registerables);

const ChartDash = () => {
  const data = {
    labels: ['Device #1', 'Device #2', 'Device #3', 'Device #4', 'Device #5'],
    datasets: [
      {
        label: '# Connection quality',
        data: [50, 120, 10, 25, 86, 17],
        backgroundColor: [
          'rgba(182, 96, 18)',
          'rgba(182, 96, 18)',
          'rgba(182, 96, 18)',
          'rgba(182, 96, 18)',
          'rgba(182, 96, 18)',
          'rgba(182, 96, 18)',
        ],
      },
    ],
  };

  return (
    <div className='bg-surface rounded-2xl shadow-md border-2 border-primary'>
      <Bar
        data={data}
        width={400}
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