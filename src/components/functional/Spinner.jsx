import React from "react";
import spinner from "../../spinner.gif";

const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

const spinnerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export default Spinner;
