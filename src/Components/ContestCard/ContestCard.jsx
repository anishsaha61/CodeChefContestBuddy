import React from "react";
import { Segment } from "semantic-ui-react";
import style from "./ContestCard.module.css";
const ContestCard = ({ data }) => {
  const { code, name, link, startDate, endDate } = data;

  return (
    <Segment
      raised
      tertiary
      style={{ width: "90%" }}
      onClick={() => window.open(link, "_blank")}
      className={style.Card}
    >
      <h1>{name}</h1>
      <h3>Code: {code}</h3>
      <span>
        <b>Start Date:</b>
        {startDate}
      </span>
      <br />
      <span>
        <b>End Date:</b>
        {endDate}
      </span>
      <br/>
      <p className={style.visitSite} >Go To Contest</p>
    </Segment>
  );
};

export default ContestCard;
