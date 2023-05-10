import React from "react";
import HeatMap from "jsheatmap";
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
  cells: Cell;
}

const headings = ["Jun", "Jul", "Aug", "Sep"]
const labels = ["2015", "2016", "2017", "2018", "2019"]
const values = [
  [7, 5, 6, 8],   // the years and rainy days by month
  [7, 5, 5, 7],
  [7, 4, 5, 9],
  [6, 5, 7, 8],
  [8, 6, 6, 8],
]

const input = labels.map((label, i) => [label, values[i]])

const heatMap = new HeatMap(headings, input);
const data = heatMap.getData();
const titles = () => headings.map(h => <th key={h}>{h}</th>)


const cols = (cells: Cell): JSX.Element[] => {
  return cells.scales.map((scale, i) => (
    <td key={i}>
      <div
        style={{
          background: `rgb(${cells.colors.red * 100}%, ${cells.colors.green * 100}%, ${cells.colors.blue * 100}%)`,
          height: "40px",
          width: "40px"
        }}
      >
        <span style={{ fontSize: "0.6em" }}>{scale.toFixed(1)}</span>
      </div>
    </td>
  ));
};

const Rows = (): JSX.Element =>
  data.rows.map((row: Row) => <tr key={row.label}>
    <td>{row.label}</td>{cols(row.cells)}
  </tr>
  );

const HeatMapTable = () =>
  <table>
    <tbody>
      <tr><th></th>{titles()}</tr>
      <Rows />
    </tbody>
  </table>

export default HeatMapTable;