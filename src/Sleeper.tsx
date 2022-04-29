import React, { useEffect, useState } from "react";
import { Progress } from "antd";
const Sleeper = () => {
  const [count, setCount] = useState(0);
  var i = 1;
  useEffect(() => {
    myLoop();
  }, []);

  function myLoop() {
    setTimeout(function () {
      i++;
      if (i <= 100) {
        setCount(i);
        myLoop();
      }
    }, 1000);
  }

  return (
    <>
      <Progress strokeLinecap="square" percent={count} />
      <Progress strokeLinecap="square" type="circle" percent={count} />
      <Progress strokeLinecap="square" type="dashboard" percent={75} />
    </>
  );
};

export default Sleeper;
