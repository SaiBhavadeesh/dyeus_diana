import React from "react";

import { ChevronRight } from "@material-ui/icons";

import "./navButton.css";

const NavButton = (props) => {
  const { title } = props;

  return (
    <div className="navButton">
      <div className="titleStyle">{title}</div>
      <ChevronRight className="iconColor" />
    </div>
  );
};

export default NavButton;
