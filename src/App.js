import React, { Component, Fragment } from "react";
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
    this.sortAge = this.sortAge.bind(this);
    this.sortName = this.sortName.bind(this);
    this.sortSport = this.sortSport.bind(this);
  }

  //Método que ordena el nombre
  sortName(list) {
    this.setState({
      users: this.state.users.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      ),
    });
  }

  //Método que ordena la edad
  sortAge(list) {
    this.setState({
      users: this.state.users.sort((a, b) =>
        a.age > b.age ? 1 : a.age < b.age ? -1 : 0
      ),
    });
  }

  //Método que ordena el deporte
  sortSport(list) {
    this.setState({
      users: this.state.users.sort((a, b) =>
        a.sport > b.sport ? 1 : a.sport < b.sport ? -1 : 0
      ),
    });
  }

  //Muestro los componentes en la pantalla
  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <CoinTable
            data={this.state.users}
            sortAge={this.sortAge}
            sortName={this.sortName}
            sortSport={this.sortSport}
          />
        </div>
      </Fragment>
    );
  }
}
export default App;
