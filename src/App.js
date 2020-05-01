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
    this.sortName = this.sortName.bind(this);
    this.sortSport = this.sortSport.bind(this);
  }
  sortBy(list) {
    console.log(list);
    this.setState({
      users: this.state.users.sort((a, b) =>
        a.age > b.age ? 1 : a.age < b.age ? -1 : 0
      ),
    });
  }

  sortName(list) {
    this.setState({
      users: this.state.users.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    });
  }

  sortSport(list) {
    this.setState({
      users: this.state.users.sort((a, b) =>
        a.sport > b.sport ? 1 : a.sport < b.sport ? -1 : 0
      ),
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1 className="title">Tabla de datos</h1>
          <CoinTable
            data={this.state.users}
            sortBy={this.sortBy}
            sortName={this.sortName}
            sortSport={this.sortSport}
          />
        </div>
      </div>
    );
  }
}
export default App;
