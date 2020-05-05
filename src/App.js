import React, { Fragment, Component, useState, useEffect } from "react";
import CoinTable from "./Component/table";
import data from "./data/names.json";
import "./styles/table.css";
import Header from "./Component/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: data,
    };
    this.sortList = this.sortList.bind(this);
  }

  //Método que ordena la tabla
  sortList(param) {
    this.setState({
      users: this.state.users.sort((a, b) =>
        a[param] > b[param] ? 1 : a[param] < b[param] ? -1 : 0
      ),
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <CoinTable data={this.state.users} sortList={this.sortList} />
        </div>
      </Fragment>
    );
  }
}
export default App;
