import React from "react";

import "./buttonBlue.css";

const ButtonBlue = (props) => {
  const { text } = props;

  return (
    <div className="buttonBlue">
      <div className="buttonTextBlue">{text}</div>
    </div>
  );
};

export default ButtonBlue;
