import React, { useState } from "react";

import Number from "./Number";

export default function Counter() {
  let [num, updateNum] = useState(0);
  return (
    <div>
      <Number num={num} />
      <button
        onClick={() => {
          updateNum(num + 1);
        }}
        className="btn btn-primary"
      >
        counter++
      </button>
    </div>
  );
}
