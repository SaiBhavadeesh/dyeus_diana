import React from "react";

import {
  Menu,
  ShoppingCartOutlined,
  NotificationsOutlined,
} from "@material-ui/icons";

import "./header.css";


const Header = () => {
  return (
    <div className="Header">
      <Menu height={24} width={24} />
      <div>
        <ShoppingCartOutlined height={24} width={24} className="rightIcons" />
        <NotificationsOutlined height={24} width={24} className="rightIcons" />
      </div>
    </div>
  );
};

export default Header;
