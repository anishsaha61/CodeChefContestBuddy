import React from "react";
import style from "./NavBar.module.css";
import { Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const NavBar = ({ visible, setVisible }) => {
  return (
    <header className={style.header}>
      <span
        onClick={() => setVisible(!visible)}
        style={{ marginLeft: 5, marginRight: 5 }}
      >
        <Icon name="bars" />
      </span>
      <span className={style.headerText}>CodeChef Contest Buddy</span>
    </header>
  );
};

export default withRouter(NavBar);
