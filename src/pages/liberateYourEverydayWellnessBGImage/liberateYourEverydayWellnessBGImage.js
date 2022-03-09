import React from "react";

import "./liberateYourEverydayWellnessBGImage.css";

import flower from "../../assets/flower.png";
import ButtonRed from "../../components/buttonRed/buttonRed";

const LiberateYourEverydayWellnessBGImage = () => {
  return (
    <div>
      <div className="containerLYEWBG">
        <ButtonRed text="Upgrade your self-care" />
        <div className="hashtagLYEWBG">#NoNasties, we promise!</div>
      </div>
      <img src={flower} alt="" width="100%" />
    </div>
  );
};

export default LiberateYourEverydayWellnessBGImage;
