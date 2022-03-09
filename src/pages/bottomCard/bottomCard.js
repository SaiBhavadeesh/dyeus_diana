import React from "react";

import { Facebook, MailOutline, Twitter } from "@material-ui/icons";

import NavButton from "../../components/navButton/navButton";

import "./bottomCard.css";

const BottomCard = () => {
  return (
    <div className="containerBottom">
      <div className="arrangeIcons">
        <Facebook className="iconStyles" />
        <Twitter className="iconStyles" />
      </div>
      <div className="arrangeButtons">
        <NavButton title="Products" />
        <NavButton title="Our Science" />
        <NavButton title="Vision & Mission" />
        <NavButton title="About Us" />
      </div>
      <div className="divider"></div>
      <div className="subscribeNote">Subscribe to our Newsletter</div>
      <div className="queryMail">
        <input className="inputStyle" placeholder="Enter your email..."/>
        <div className="mailButton">
          <MailOutline height={14} width={14} />
          <div className="activate">Activate</div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
