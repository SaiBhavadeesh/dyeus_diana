import React from "react";
import ButtonBlue from "../../components/buttonBlue/buttonBlue";

import "./trackYourMood.css";

import human1 from "../../assets/human1.png";
import human2 from "../../assets/human2.png";
import human3 from "../../assets/human3.png";
import human4 from "../../assets/human4.png";

const TrackYourMood = () => {
  return (
    <div>
      <div className="containerTYM">
        <div className="titleTYM">Track your mood</div>
        <div className="contentTYM">
          All days and all moods are not made equal. But we can only improve
          what we measure. Track your mood and vitals (including skin and hair
          health) so you can take better care of yourself every day.
        </div>
        <ButtonBlue text="Track you mood on the app" />
      </div>
      <div className="imageDiv">
        <div className="subImageDiv">
          <img src={human1} alt="" width="45%" className="imageStyleTYM" />
          <img src={human2} alt="" width="45%" className="imageStyleTYM" />
        </div>
        <div className="subImageDiv">
          <img src={human3} alt="" width="45%" className="imageStyleTYM" />
          <img src={human4} alt="" width="45%" className="imageStyleTYM" />
        </div>
      </div>
    </div>
  );
};

export default TrackYourMood;
