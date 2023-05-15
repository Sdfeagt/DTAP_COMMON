import React from "react";

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
  const values = [
    [28, 62, 13, 40, 53, 88, 84, 19, 54, 98, 22, 81, 74, 95, 3, 5, 99, 42, 71, 79, 15, 7, 96, 61, 17],
    [17, 65, 89, 81, 55, 67, 6, 45, 80, 3, 95, 67, 55, 1, 42, 41, 85, 4, 4, 47, 59, 15, 21, 46, 48],
    [61, 44, 63, 79, 8, 59, 57, 9, 56, 2, 58, 39, 47, 70, 36, 22, 17, 63, 41, 67, 70, 45, 31, 81, 1],
    [78, 81, 39, 19, 73, 48, 26, 14, 41, 55, 28, 98, 3, 16, 36, 81, 98, 36, 7, 30, 4, 31, 64, 57, 28],
    [94, 81, 92, 83, 63, 91, 96, 91, 22, 4, 4, 36, 81, 1, 47, 35, 71, 75, 63, 61, 47, 90, 23, 27, 19],
    [94, 91, 77, 7, 63, 78, 89, 19, 5, 63, 34, 11, 91, 9, 46, 67, 7, 11, 89, 5, 69, 49, 67, 2, 50],
    [20, 35, 85, 44, 27, 23, 83, 66, 71, 9, 46, 8, 53, 4, 96, 79, 10, 53, 69, 62, 20, 56, 17, 67, 96],
    [67, 49, 11, 55, 99, 55, 51, 12, 54, 67, 34, 45, 16, 56, 59, 67, 13, 51, 26, 31, 37, 29, 19, 12, 85],
    [16, 6, 51, 31, 12, 5, 64, 5, 77, 20, 31, 24, 75, 10, 67, 35, 71, 67, 58, 23, 54, 62, 50, 18, 14],
    [28, 62, 13, 40, 53, 88, 84, 19, 54, 98, 22, 81, 74, 95, 3, 5, 99, 42, 71, 79, 15, 7, 96, 61, 17],
    [17, 65, 89, 81, 55, 67, 6, 45, 80, 3, 95, 67, 55, 1, 42, 41, 85, 4, 4, 47, 59, 15, 21, 46, 48],
    [61, 44, 63, 79, 8, 59, 57, 9, 56, 2, 58, 39, 47, 70, 36, 22, 17, 63, 41, 67, 70, 45, 31, 81, 1],
    [78, 81, 39, 19, 73, 48, 26, 14, 41, 55, 28, 98, 3, 16, 36, 81, 98, 36, 7, 30, 4, 31, 64, 57, 28],
    [94, 81, 92, 83, 63, 91, 96, 91, 22, 4, 4, 36, 81, 1, 47, 35, 71, 75, 63, 61, 47, 90, 23, 27, 19],
    [94, 91, 77, 7, 63, 78, 89, 19, 5, 63, 34, 11, 91, 9, 46, 67, 7, 11, 89, 5, 69, 49, 67, 2, 50],
    [20, 35, 85, 44, 27, 23, 83, 66, 71, 9, 46, 8, 53, 4, 96, 79, 10, 53, 69, 62, 20, 56, 17, 67, 96],
    [67, 49, 11, 55, 99, 55, 51, 12, 54, 67, 34, 45, 16, 56, 59, 67, 13, 51, 26, 31, 37, 29, 19, 12, 85],
    [16, 6, 51, 31, 12, 5, 64, 5, 77, 20, 31, 24, 75, 10, 67, 35, 71, 67, 58, 23, 54, 62, 50, 18, 14],
    [67, 49, 11, 55, 99, 55, 51, 12, 54, 67, 34, 45, 16, 56, 59, 67, 13, 51, 26, 31, 37, 29, 19, 12, 85],
    [16, 6, 51, 31, 12, 5, 64, 5, 77, 20, 31, 24, 75, 10, 67, 35, 71, 67, 58, 23, 54, 62, 50, 18, 14],
  ];

  const data: Row[] = labels.map((label, i) => {
    const cells: Cell[] = values[i].map((scale, j) => {
      const colors: RGB = {
        red: 0,
        green: 0,
        blue: 0
      };
      const bgColor = scale === 0 ? 'rgba(0,0,0,0.2)' : '';

      // Calculate color based on scale
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
          <div className="flex text-xs place-self-center">{cell.scales[0].toFixed(0)}</div>
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