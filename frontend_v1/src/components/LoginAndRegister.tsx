import React, { use, useEffect, useState } from "react";
import Login from "./Login";

import Register from "./register";

interface inLogin {
  inLoginValue: Boolean;
}
const LoginForm = () => {
  const [inLog, setInLog] = useState(true);

  const [styleLog, setStyleLog] = useState("");
  const [styleReg, setStyleReg] = useState("");

  useEffect(() => {
    if (inLog) {
      setStyleLog("underline");
    } else {
      setStyleReg("underline");
    }
  }, [inLog]);

  const onClickToLog = () => {
    setInLog(true);
    setStyleLog("underline");
    setStyleReg("");
  };

  const onClickToReg = () => {
    setInLog(false);
    setStyleReg("underline");
    setStyleLog("");
  };

  return (
    <div className="space-y-7">
      <div className="flex flex-row space-x-4 text-lg		">
        <div className={styleLog}>
          {inLog ? (
            <div>Login</div>
          ) : (
            <button
              onClick={() => {
                onClickToLog();
              }}
            >
              Login
            </button>
          )}
        </div>
        <div className={styleReg}>
          {inLog ? (
            <button
              onClick={() => {
                onClickToReg();
              }}
            >
              Register
            </button>
          ) : (
            <div>Register</div>
          )}
        </div>
      </div>
      {inLog ? <Login /> : <Register />}
    </div>
  );
};

export default LoginForm;
