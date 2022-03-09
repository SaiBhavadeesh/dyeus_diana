import React from "react";

import "./consultWithWellnessExperts.css";

import humanBoy from "../../assets/human-boy.png";

import ButtonBlue from "../../components/buttonBlue/buttonBlue";

const ConsultWithWellnessExperts = () => {
  return (
    <div>
      <div className="containerCWE">
        <div className="titleCWE">Consult with wellness experts</div>
        <div className="contentCWE">
          Set up health consultations with experienced doctors and therapists on
          our app. Simply select a service, answer a few questions, and we’ll
          connect you to someone who is the right-fit for you.
        </div>
        <ButtonBlue text="Get a consultation" />
      </div>
      <img src={humanBoy} alt="" width="100%" />
    </div>
  );
};

export default ConsultWithWellnessExperts;
