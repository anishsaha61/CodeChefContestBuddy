import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ccc_logo from "./Assets/cc-logo.png";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MainScreen from "./Components/MainScreen/MainScreen";
export class App extends Component {
  state = {
    visible: false,
  };
  render() {
    const setVisible = (value) => {
      this.setState({ visible: value });
    };
    const dataList = [
      {
        title: "Future Contests",
        link: "/future",
        logo: ccc_logo,
        subTitle: "All upcoming CodeChef contests.",
      },
      {
        title: "Live Contests",
        link: "/live",
        logo: ccc_logo,
        subTitle: "All ongoing CodeChef contests.",
      },
      {
        title: "Past Contests",
        link: "/past",
        logo: ccc_logo,
        subTitle: "All past CodeChef contests.",
      },
    ];
    return (
      <Router>
        <div className="App">
          <NavBar visible={this.state.visible} setVisible={setVisible} />
          <Sidebar.Pushable
            as={Segment}
            style={{
              background: "#243447",
              marginTop: 55,
              width: "100%",
            }}
          >
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={this.state.visible}
              width="thin"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Link to="/" onClick={() => setVisible(false)}>
                <Menu.Item as="span" style={{ color: "#c51f5d" }}>
                  <Icon name="home" />
                  Home
                </Menu.Item>
              </Link>
              <Link to="/future" onClick={() => setVisible(false)}>
                <Menu.Item as="span" style={{ color: "#c51f5d" }}>
                  <Icon name="angle double up" size="small" />
                  Upcoming Contests
                </Menu.Item>
              </Link>
              <Link to="/live" onClick={() => setVisible(false)}>
                <Menu.Item as="span" style={{ color: "#c51f5d" }}>
                  <Icon name="rss" />
                  Ongoing Contests
                </Menu.Item>
              </Link>
              <Link to="/past" onClick={() => setVisible(false)}>
                <Menu.Item as="span" style={{ color: "#c51f5d", flex: 1 }}>
                  <Icon name="angle double down" />
                  Past Contests
                </Menu.Item>
              </Link>
              <Link to="/about" onClick={() => setVisible(false)}>
                <Menu.Item as="span" style={{ color: "#c51f5d", flex: 1 }}>
                  <Icon name="user" />
                  About
                </Menu.Item>
              </Link>
            </Sidebar>

            <Sidebar.Pusher
              dimmed={this.state.visible}
              style={{
                width: "100%",
                height: window.innerHeight - 55,
              }}
            >
              <MainScreen dataList={dataList} setVisible={setVisible} />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    );
  }
}

export default App;
