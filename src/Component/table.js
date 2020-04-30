import React from "react";
import { Table, Button } from "react-bootstrap";
import "../styles/table.css";

export default function CoinTable(props) {
  return (
    <div className="container col-sm-6 table justify-content-md-center">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Sport</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
              <td>{row.sport}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="button ">
        <Button
          className=" btn-responsive "
          variant="primary"
          onClick={() => props.sortBy(props.data)}
        >
          Sort by name
        </Button>{" "}
        <Button className="btn-responsive" variant="secondary">
          Sort by age
        </Button>{" "}
        <Button className="btn-responsive" variant="success">
          Sort by sport
        </Button>{" "}
      </div>
    </div>
  );
}
