import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getHeatMaps } from "@/database/firebaseDB";
import { v4 as uuidv4 } from 'uuid';


interface RGB {
  red: number;
  green: number;
  blue: number;
}

interface Cell {
  scales: number[];
  colors: RGB;
}

interface Row {
  label: string;
  cells: Cell[];
}

const HeatMap = () => {
  const [heatmapData, setHeatmapdata] = useState<any>()
  const { user } = useAuth();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await getHeatMaps()
        setHeatmapdata(data.find((rawData: any) => (rawData.owner === user.email)))
      } catch (error: any) {
        console.log(error.message);
      }
    }
    const interval = setInterval(() => {
      getInfo()
    }, 1000)
    return () => clearInterval(interval)
  })
  if (heatmapData != undefined) {
    const data: Row[] = Object.values(heatmapData.data).map((val: any, i: any) => {
      const cells: Cell[] = heatmapData.data[i].map((data_point: any) => {
        const colors: RGB = {
          red: 0,
          green: 0,
          blue: 0
        };
        const bgColor = data_point === 0 ? 'rgba(0,0,0,0.2)' : '';

        if (data_point < 5) {
          colors.red = 1;
          colors.green = 1 - ((5 - data_point) / 5);
        } else if (data_point === 100) {
          colors.red = 0xB6;
          colors.green = 0x60;
          colors.blue = 0x12;
        } else {
          colors.red = 1 - ((data_point - 5) / 5);
          colors.green = 1;
        }

        return {
          scales: [data_point],
          colors: colors,
          bgColor: bgColor,
        };
      });

      return {
        label: "",
        cells: cells
      };
    });

    const cols = (cells: Cell[]): JSX.Element[] => {
      return cells.map((cell, i) => (
        <div key={uuidv4()} className={`flex items-center justify-center bg-primary`}
          style={{ opacity: `${cell.scales[0] / 100}` }}>
          <div
            className='h-4 w-4 flex'
          >
            <div className="flex text-xs place-self-center">{cell.scales[0].toFixed(0)}</div>
          </div>
        </div >
      ));
    };

    return (
      <div className="px-4 pb-4 bg-surface rounded-2xl shadow-md border-2 border-primary h-[475px] w-[475px]">
        <div className="flex flex-row space-x-4 text-xl">
          Heat map
        </div>
        <div className="pt-4">
          {data.map((row: Row) => (
            <div key={uuidv4()} className="flex flex-wrap">
              <div className="text-xs px-2 w-1/5 md:w-auto">{row.label}</div>
              {cols(row.cells)}
            </div>
          ))}
        </div>
      </div>
    );

  }
  else {
    return (
      <div className="px-4 pb-4 bg-surface rounded-2xl shadow-md border-2 border-primary h-[475px] w-[475px] flex flex-col justify-center items-center">
        <div className="flex flex-row space-x-4 text-xl">
          Heat map
        </div>
        <div className="flex justify-center items-center flex-grow">
          <div aria-label="Loading..." role="status">
            <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
              <path className="fill-gray-200" d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"></path>
              <path className="fill-primary" d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"></path>
            </svg>
          </div>
        </div>
      </div>
    );



  }

};

export default HeatMap;