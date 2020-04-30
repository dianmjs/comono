import React, { Component } from "react";
import CoinTable from "./Component/table";
import data from "./data/names.json";
import "./styles/table.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: data,
    };
    this.sortBy = this.sortBy.bind(this);
  }
  sortBy(user) {
    console.log(user);
    this.setState({
      users: data.sort((a, b) => a < b),
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1 className="title">Tabla de datos</h1>
          <CoinTable data={this.state.users} sortBy={this.sortBy} />
        </div>
      </div>
    );
  }
}
export default App;
