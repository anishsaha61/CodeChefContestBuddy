import React from "react";
import style from "./MainScreen.module.css";
import MenuCard from "../MenuCard/MenuCard";
import { Route, withRouter } from "react-router-dom";
import ContestDisplay from "../ContestDislplay/ContestDisplay";
import About from "../About/About";

const MainScreen = ({ dataList, history, setVisible }) => {
  const changeRoute = (name) => {
    history.push(name);
  };
  return (
    <div>
      <span
        className={style.menuContainer}
        style={{ height: window.innerHeight - 55, width: "100vw" }}
      >
        <Route exact path="/">
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {dataList.map((item) => (
              <MenuCard data={item} key={item.link} changeRoute={changeRoute} />
            ))}
          </span>
          {/* <hr /> */}
        </Route>
        <Route exact path="/future">
          <ContestDisplay
            url="https://radiant-badlands-67547.herokuapp.com/codechef/future"
            title="Upcoming Contests"
            setVisible={setVisible}
          />
        </Route>
        <Route exact path="/live">
          <ContestDisplay
            url="https://radiant-badlands-67547.herokuapp.com/codechef/live"
            title="Ongoing Contests"
            setVisible={setVisible}
          />
        </Route>
        <Route exact path="/past">
          <ContestDisplay
            url="https://radiant-badlands-67547.herokuapp.com/codechef/past"
            title="Past Contests"
            setVisible={setVisible}
          />
        </Route>
        <Route exact path="/about">
          <About setVisible={setVisible}/>
        </Route>
      </span>
    </div>
  );
};

export default withRouter(MainScreen);
