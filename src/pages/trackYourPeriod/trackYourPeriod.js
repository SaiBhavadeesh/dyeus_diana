import React from "react";

import "./trackYourPeriod.css";

import calendar from "../../assets/calendar.png";
import ButtonRed from "../../components/buttonRed/buttonRed";

const TrackYourPeriod = () => {
  return (
    <div>
      <div className="containerTYP">
        <div className="titleTYP">Track your period</div>
        <div className="contentTYP">
          Stay in the know with reliable AI-based and science-backed period,
          ovulation, and PMS predictions. The intuitive design makes tracking
          your cycle effortless and helps you stay on top of your monthly data.
        </div>
        <ButtonRed text="Track you period on the app" />
      </div>
      <img src={calendar} alt="" width="100%" />
    </div>
  );
};

export default TrackYourPeriod;
