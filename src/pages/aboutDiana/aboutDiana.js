import React from "react";

import "./aboutDiana.css";

import tube from "../../assets/tube.svg";
import twinkle from "../../assets/twinkle.svg";
import call from "../../assets/call.svg";

const AboutDiana = () => {
  return (
    <div className="containerAD">
      <div className="titleAD">About Diana</div>
      <div className="subTitleAD">A platform that looks out for you</div>
      <div className="mainContentAD">
        Diana empowers you to understand how your body works so you can look and
        feel your best.
      </div>
      <div className="dividerAD"></div>
      <div className="titleTwoAD">Our Philosophy</div>
      <div className="subTitleTwoAD">
        Sustainable wellness is a big-picture, inside out approach
      </div>
      <div className="contentAD">
        <p>
          Diana is on a mission to create thoughtful, science-backed solutions
          for women who want to make informed decisions about their health and
          wellness.
        </p>
        <p>That’s why we’ve created an integrated ecosystem of:</p>
      </div>
      <div className="subContent">
        <img src={tube} alt="" />
        <p>
          Consciously formulated products that deliver feel-good results fast
        </p>
        <img src={twinkle} alt="" />
        <p>
          In-app mood and period tracking options that help you cultivate a
          deeper connection with your mind and body
        </p>
        <img src={call} alt="" />
        <p>
          In-app consultation portals that connect you with compassionate
          wellness experts
        </p>
      </div>
      <div className="footerContent">
        Consider us your nerdy ally who spends their time perfecting products
        that work because they want you to feel your best everyday.
      </div>
    </div>
  );
};

export default AboutDiana;
