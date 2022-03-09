import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <MenuIcon height={24} width={24} />
      <div>
        <ShoppingCartOutlinedIcon
          height={24}
          width={24}
          className="rightIcons"
        />
        <NotificationsNoneOutlinedIcon
          height={24}
          width={24}
          className="rightIcons"
        />
      </div>
    </div>
  );
};

export default Header;
