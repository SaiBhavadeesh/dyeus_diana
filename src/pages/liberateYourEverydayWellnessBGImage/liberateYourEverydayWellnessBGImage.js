import React from "react";

import "./liberateYourEverydayWellnessBGImage.css";

import flower from "../../assets/flower.png";

const LiberateYourEverydayWellnessBGImage = () => {
  return (
    <div>
      <div className="containerLYEWBG">
        <div className="buttonLYEWBG">
          <div className="buttonTextLYEWBG">Upgrade your self-care</div>
        </div>
        <div className="hashtagLYEWBG">#NoNasties, we promise!</div>
      </div>
      <img src={flower} alt="" width="100%" />
    </div>
  );
};

export default LiberateYourEverydayWellnessBGImage;
