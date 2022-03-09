import React from "react";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import "./getYourPersonalizedPeriodBox.css";

import boxes from "../../assets/boxes.svg";

const GetYourPersonalizedPeriodBox = () => {
  return (
    <div className="containerGYPPB">
      <div className="titleGYPPB">Get your personalized period box</div>
      <img src={boxes} alt="" width="100%" />
      <div className="contentGYPPB">
        Tailor your monthly box of organic period products without the organic
        price tag (no pink taxing here). Get it delivered to your doorstep in
        sustainable packaging and track your subscription on our app.{" "}
      </div>
      <div className="buttonGYPPB">
        <div className="buttonStyle">
          <div className="buttonTextGYPPB">Create your box on the app</div>
          <ChevronRightIcon className="buttonIconGYPPB"/>
        </div>
      </div>
    </div>
  );
};

export default GetYourPersonalizedPeriodBox;
