import React from "react";
import style from "./MenuCard.module.css";
import { Segment, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
const MenuCard = ({ data, changeRoute }) => {
  const { title, link, logo, subTitle } = data;
  return (
    <Segment
      raised
      tertiary
      className={style.container}
      onClick={() => changeRoute(link)}
    >
      <Image src={logo} size="small" />
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </Segment>
  );
};

export default withRouter(MenuCard);
