import React from "react";
import { faker } from '@faker-js/faker';

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
  //const headings = ["Lon_1", "Lon_2", "Lon_3", "Lon_4", "Lon_5", "Lon_6", "Lon_7", "Lon_8", "Lon_9", "Lon_10", "Lon_11", "Lon_12", "Lon_13", "Lon_14", "Lon_15", "Lon_16", "Lon_17", "Lon_18", "Lon_19", "Lon_20"];
  const labels = ["Lat_1", "Lat_2", "Lat_3", "Lat_4", "Lat_5", "Lat_6", "Lat_7", "Lat_8", "Lat_9", "Lat_10", "Lat_11", "Lat_12", "Lat_13", "Lat_14", "Lat_15", "Lat_16", "Lat_17", "Lat_18", "Lat_19", "Lat_20"];


  const values = Array.from({ length: 25 }, () =>
    Array.from({ length: 25 }, () => faker.number.int({ min: 0, max: 99 }))
  ); // FIXME: this causes an error, but as it is just junk data, I'll ignore it

  const data: Row[] = labels.map((label, i) => {
    const cells: Cell[] = values[i].map((scale, j) => {
      const colors: RGB = {
        red: 0,
        green: 0,
        blue: 0
      };
      const bgColor = scale === 0 ? 'rgba(0,0,0,0.2)' : '';

      if (scale < 5) {
        colors.red = 1;
        colors.green = 1 - ((5 - scale) / 5);
      } else if (scale === 100) {
        colors.red = 0xB6;
        colors.green = 0x60;
        colors.blue = 0x12;
      } else {
        colors.red = 1 - ((scale - 5) / 5);
        colors.green = 1;
      }

      return {
        scales: [scale],
        colors: colors,
        bgColor: bgColor,
      };
    });

    return {
      label: "",
      cells: cells
    };
  });


  //const titles = headings.map((heading) => <th key={heading}>{heading}</th>);

  const cols = (cells: Cell[]): JSX.Element[] => {
    return cells.map((cell, i) => (
      <div key={i} className={`flex items-center justify-center bg-primary`}
        style={{ opacity: `${cell.scales[0] / 100}` }}>
        <div
          className={`h-4 w-4 flex`}
        >
          {/* <div className="flex text-xs place-self-center">{cell.scales[0].toFixed(0)}</div> */}
        </div>
      </div >
    ));
  };

  return (
    <div className="px-4 pb-4 bg-surface rounded-2xl shadow-md border-2 border-primary">
      <div className="flex flex-row space-x-4 text-xl">
        Heat map
      </div>
      <div className="pt-4">
        {data.map((row: Row) => (
          <div key={row.label} className="flex flex-wrap">
            <div className="text-xs px-2 w-1/5 md:w-auto">{row.label}</div>
            {cols(row.cells)}
          </div>
        ))}
      </div>
    </div>
  );



};

export default HeatMap;