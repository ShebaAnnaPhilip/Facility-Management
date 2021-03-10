import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../components/Card";
import "./Dashboard.css";

function Dashboard() {
  const history = useHistory();
  const [backgroundColour, setBackgroundColour] = useState("default");

  const onMouseOver = (colour) => {
    setBackgroundColour(colour);
  };
  const handleClick = (e) => {
    history.push("/facilities");
  };
  return (
    <div className="dashboard">
      <div className="row">
        <div className="column" onClick={() => handleClick()}>
          <div className="tile red_column"> Facilities</div>
        </div>
        <div className="column">
          <div className="tile lightblue_column"></div>
        </div>
        <div className="column">
          <div className="tile darkblue_column"></div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="tile yellow_column"></div>
        </div>
        <div className="column">
          <div className="tile green_column"></div>
        </div>
        <div className="column">
          <div className="tile purple_column"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
