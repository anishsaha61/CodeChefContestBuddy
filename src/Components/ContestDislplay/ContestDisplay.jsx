import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import loader from "../../Assets/loader.png";
import Axios from "axios";
import ContestCard from "../ContestCard/ContestCard";
import style from "./ContestDisplay.module.css";
import { withRouter } from "react-router-dom";
export class ContestDisplay extends Component {
  state = {
    loading: true,
    dataArray: [],
    lastUpdated: "",
  };
  componentDidMount() {
    Axios.get(this.props.url).then((resp) => {
      this.setState({
        dataArray: resp.data.data,
        lastUpdated: resp.data.Last_Updated,
        loading: false,
      });
    });
  }
  render() {
    return (
      <div
        className={style.mainContainer}
        style={{ height: window.innerHeight - 55 }}
      >
        {this.state.loading && <Image src={loader} size="small" />}
        {!this.state.loading && <h1>{this.props.title}</h1>}
        {!this.state.loading &&
          this.state.dataArray.map((item) => <ContestCard data={item} />)}
        <hr />
      </div>
    );
  }
}
export default withRouter(ContestDisplay);
