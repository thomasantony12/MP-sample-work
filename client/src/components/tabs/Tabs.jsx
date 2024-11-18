import { useState } from "react";
import "./Tabs.scss"

function Tabs({setTab, tab}) {

  function handleClick(val) {
    setTab(val);
  }


  return (
    <div className="tab">
      <p
        onClick={() => handleClick(1)}
        style={{ color: tab == 1 ? "aqua" : "black", cursor: "pointer" }}
      >
        All
      </p>
      <p
        onClick={() => handleClick(2)}
        style={{ color: tab == 2 ? "aqua" : "black", cursor: "pointer" }}
      >
        Active
      </p>
      <p
        onClick={() => handleClick(3)}
        style={{ color: tab == 3 ? "aqua" : "black", cursor: "pointer" }}
      >
        Completed
      </p>
    </div>
  );
}

export default Tabs;
