import React from "react";

import "./buttonRed.css";

const ButtonRed = (props) => {
  const { text } = props;

  return (
    <div className="buttonRed">
      <div className="buttonTextRed">{text}</div>
    </div>
  );
};

export default ButtonRed;
