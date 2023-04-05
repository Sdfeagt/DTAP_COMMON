import React, { useEffect, useState } from "react";

import ChartDash from "./ChartDash";
import StatusDash from "./StatusDash";

const LoginForm = () => {
  const [inChart, setInChart] = useState(true);

  const [styleChart, setStyleChart] = useState("");
  const [styleStatus, setStyleStatus] = useState("");

  useEffect(() => {
    if (inChart) {
        setStyleChart("underline");
    } else {
        setStyleStatus("underline");
    }
  }, [inChart]);

  const onClickToChart = () => {
    setInChart(true);
    setStyleChart("underline");
    setStyleStatus("");
  };

  const onClickToStatus = () => {
    setInChart(false);
    setStyleStatus("underline");
    setStyleChart("");
  };

  console.log(inChart);
  return (
    <div className="py-1 px-4 bg-surface rounded-2xl shadow-md border-2 border-primary">
      <div className="flex flex-row space-x-4 text-xl">
        <div className={styleChart}>
          {inChart ? (
            <div>Data</div>
          ) : (
            <button
              onClick={() => {
                onClickToChart();
              }}
            >
              Data
            </button>
          )}
        </div>
        <div className={styleStatus}>
          {inChart ? (
            <button
              onClick={() => {
                onClickToStatus();
              }}
            >
              Status
            </button>
          ) : (
            <div>Status</div>
          )}
        </div>
      </div>
      {inChart ? <ChartDash /> : <StatusDash />}
    </div>
  );
};

export default LoginForm;
