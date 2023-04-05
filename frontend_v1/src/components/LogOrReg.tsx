import React, { useEffect, useState } from "react";

import Link from "next/link";

interface inLogin {
  inLoginValue: Boolean;
}
const LogOrReg = (inLog: inLogin) => {
  const [styleLog, setStyleLog] = useState("");
  const [styleReg, setStyleReg] = useState("");

  useEffect(() => {
    if (inLog.inLoginValue) {
      setStyleLog("underline");
    } else {
      setStyleReg("underline");
    }
  }, [inLog.inLoginValue]);

  return (
    <div className="flex flex-row space-x-4 text-lg		">
      <div className={styleLog}>
        {inLog.inLoginValue ? <div>Login</div> : <Link href="/">Login</Link>}
      </div>
      <div className={styleReg}>
        {inLog.inLoginValue ? (
          <Link href="/register">Register</Link>
        ) : (
          <div>Register</div>
        )}
      </div>
    </div>
  );
};

export default LogOrReg;
