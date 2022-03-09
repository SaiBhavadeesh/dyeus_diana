import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCart";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <MenuIcon height={24} width={24} />
      <div>
        <ShoppingCartOutlinedIcon height={24} width={24} />
        <NotificationsNoneOutlinedIcon height={24} width={24} />
      </div>
    </div>
  );
};

export default Header;
